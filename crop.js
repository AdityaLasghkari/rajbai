const sharp = require('sharp');

async function processImage() {
    try {
        // Crop the top square to isolate just the globe/ship
        await sharp('public/images/logo.png')
            .extract({ left: 312, top: 214, width: 400, height: 400 })
            .toFile('src/app/icon.png');
            
        console.log("Success! Cropped logo saved to src/app/icon.png");
    } catch (e) {
        console.error(e);
    }
}
processImage();
