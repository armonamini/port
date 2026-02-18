const fs = require('fs');
const path = require('path');

// Create a simple grain texture using SVG (can be converted to PNG)
// For now, we'll create an SVG that can serve as the grain texture
const svgGrain = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#noise)" opacity="0.4"/>
</svg>`;

// For a proper PNG, we'll use a simple base64-encoded 1x1 transparent PNG
// and create a CSS pattern instead, or create a minimal grain pattern
// Let's create a simple data URI approach via CSS

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create a simple SVG grain file (can be used directly or converted to PNG)
fs.writeFileSync(path.join(publicDir, 'grain.svg'), svgGrain);

console.log('Grain texture created (SVG format)');
