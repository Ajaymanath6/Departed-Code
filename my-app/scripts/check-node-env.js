#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const nodeMajor = Number(process.versions.node.split('.')[0]);

function fail(message) {
  console.error(`\n[my-app] ${message}\n`);
  process.exit(1);
}

if (process.env.NODE_PATH) {
  fail(
    'NODE_PATH is set and mixes Angular/TypeScript from other projects:\n' +
      `  NODE_PATH=${process.env.NODE_PATH}\n\n` +
      'Fix: unset NODE_PATH\n' +
      'Then: cd my-app && npm start\n' +
      '(Do not run global `ng serve`; use npm scripts from my-app.)'
  );
}

if (nodeMajor < 18 || nodeMajor >= 21) {
  console.warn(
    `\n[my-app] Node ${process.version} is not supported for Angular 15.\n` +
      'Use Node 20 (see .nvmrc): nvm use\n'
  );
}

const requiredPaths = [
  'node_modules/typescript/package.json',
  'node_modules/typescript/lib/lib.dom.d.ts',
  'node_modules/typescript/lib/lib.es2022.d.ts',
  'node_modules/@angular/compiler-cli/package.json',
  'node_modules/@angular/cli/bin/ng.js',
];

const missing = requiredPaths.filter(
  (relativePath) => !fs.existsSync(path.join(projectRoot, relativePath))
);

if (missing.length > 0) {
  fail(
    'Dependencies are missing or incomplete (common after interrupted npm install):\n' +
      missing.map((entry) => `  - ${entry}`).join('\n') +
      '\n\nFix: cd my-app && npm run reinstall\n' +
      'Then: npm start'
  );
}

const localCoreVersion = readPackageVersion(
  path.join(projectRoot, 'node_modules/@angular/core/package.json')
);
const parentAngularRoot = path.resolve(projectRoot, '../../../node_modules/@angular');
const parentCorePath = path.join(parentAngularRoot, 'core/package.json');
const parentFormsPath = path.join(parentAngularRoot, 'forms/package.json');

if (fs.existsSync(parentCorePath) || fs.existsSync(parentFormsPath)) {
  const parentCoreVersion = readPackageVersion(parentCorePath);
  const parentFormsVersion = readPackageVersion(parentFormsPath);
  const versions = [parentCoreVersion, parentFormsVersion].filter(Boolean);
  const polluted = versions.some((version) => version !== localCoreVersion);

  if (polluted) {
    console.warn(
      `\n[my-app] Warning: parent node_modules has mixed Angular packages at:\n` +
        `  ${parentAngularRoot}\n` +
        `  core=${parentCoreVersion || 'missing'}, forms=${parentFormsVersion || 'missing'}\n` +
        `  local core=${localCoreVersion}\n` +
        'This project uses custom-webpack to ignore those; always run: cd my-app && npm start\n'
    );
  }
}

function readPackageVersion(packageJsonPath) {
  if (!fs.existsSync(packageJsonPath)) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')).version;
  } catch {
    return null;
  }
}
