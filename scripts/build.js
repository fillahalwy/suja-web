const fs = require('fs');
const path = require('path');

// Create public directory
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy index.html
fs.copyFileSync(
  path.join(__dirname, '..', 'index.html'),
  path.join(publicDir, 'index.html')
);

// Copy src folder
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  fs.readdirSync(src).forEach(file => {
    const srcFile = path.join(src, file);
    const destFile = path.join(dest, file);
    
    if (fs.statSync(srcFile).isDirectory()) {
      copyDir(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

copyDir(
  path.join(__dirname, '..', 'src'),
  path.join(publicDir, 'src')
);

// Copy assets folder if exists
const assetsDir = path.join(__dirname, '..', 'assets');
if (fs.existsSync(assetsDir)) {
  copyDir(assetsDir, path.join(publicDir, 'assets'));
}

console.log('✅ Build completed - Files copied to public/');
