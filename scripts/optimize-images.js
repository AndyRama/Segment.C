// scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await optimizeImages(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      console.log(`Optimizing ${filePath}...`);
      
      const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '-optimized$&');
      
      await sharp(filePath)
        .resize(1920, 1920, { // Max dimension
          fit: 'inside',
          withoutEnlargement: true
        })
        .jpeg({ quality: 80 })
        .toFile(outputPath);
      
      const originalSize = stat.size;
      const newSize = fs.statSync(outputPath).size;
      
      console.log(`  ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB`);
      
      // Replace original
      fs.renameSync(outputPath, filePath);
    }
  }
}

optimizeImages('./public/images').then(() => console.log('Done!'));