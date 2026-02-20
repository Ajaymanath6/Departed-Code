/**
 * Converts assets/png/*.png to WebP (compressed, clear).
 * Run: node scripts/convert-png-to-webp.cjs
 * Place your PNG in src/assets/png/ first (e.g. order-document.png).
 */
const path = require('path');
const fs = require('fs');

const assetsPng = path.join(__dirname, '..', 'src', 'assets', 'png');
const inputFile = path.join(assetsPng, 'order-document.png');
const outputFile = path.join(assetsPng, 'order-document.webp');

if (!fs.existsSync(inputFile)) {
  console.warn('Missing src/assets/png/order-document.png – add the PNG and run again.');
  process.exit(0);
}

async function run() {
  const sharp = require('sharp');
  await sharp(inputFile)
    .webp({
      quality: 88,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outputFile);
  console.log('Created:', outputFile);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
