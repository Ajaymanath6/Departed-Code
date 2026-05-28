#!/usr/bin/env node
'use strict';

const nodeMajor = Number(process.versions.node.split('.')[0]);

if (process.env.NODE_PATH) {
  console.error(
    '\n[my-app] NODE_PATH is set and mixes Angular from other projects:\n' +
      `  NODE_PATH=${process.env.NODE_PATH}\n\n` +
      'Fix: unset NODE_PATH\n' +
      'Then: cd my-app && npm start\n' +
      '(Do not run `ng serve` directly unless NODE_PATH is unset.)\n'
  );
  process.exit(1);
}

if (nodeMajor < 18 || nodeMajor >= 21) {
  console.warn(
    `\n[my-app] Node ${process.version} is not supported for Angular 15.\n` +
      'Use Node 18 or 20 (see .nvmrc): nvm use\n'
  );
}
