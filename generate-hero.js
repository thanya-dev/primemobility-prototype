const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'src', 'assets', 'hero.png');
const outputPath = path.join(__dirname, 'src', 'assets');

async function processImages() {
  try {
    console.log('Generating Desktop WebP (1920px)...');
    await sharp(inputPath)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputPath, 'hero-desktop.webp'));

    console.log('Generating Tablet WebP (1024px)...');
    await sharp(inputPath)
      .resize({ width: 1024, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputPath, 'hero-tablet.webp'));

    console.log('Generating Mobile WebP (768px)...');
    // For mobile we keep the full image but lower resolution, CSS will handle object-fit/position
    await sharp(inputPath)
      .resize({ width: 768, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputPath, 'hero-mobile.webp'));

    console.log('All images generated successfully.');
  } catch (err) {
    console.error('Error processing images:', err);
  }
}

processImages();
