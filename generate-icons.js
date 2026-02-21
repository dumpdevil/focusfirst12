const fs = require('fs');
const path = require('path');

// Create a simple SVG icon
function createSVG(size) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="#1a1a2e"/>
  <circle cx="${size/2}" cy="${size/2}" r="${size/3}" fill="#16213e"/>
  <circle cx="${size/2}" cy="${size/2}" r="${size/4}" fill="none" stroke="#0f3460" stroke-width="${size/20}"/>
  <line x1="${size/2}" y1="${size/2}" x2="${size/2}" y2="${size/2 - size/5}" stroke="#e94560" stroke-width="${size/30}" stroke-linecap="round"/>
</svg>`;
}

// Ensure icons directory exists
const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir);
}

// Generate SVG files (browsers can use these)
fs.writeFileSync(path.join(iconsDir, 'icon-192.svg'), createSVG(192));
fs.writeFileSync(path.join(iconsDir, 'icon-512.svg'), createSVG(512));

console.log('SVG icons generated successfully!');
console.log('Note: Update manifest.json to use .svg instead of .png, or convert these to PNG using an online tool.');
