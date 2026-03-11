const sharp = require('sharp');

async function processImage() {
    try {
        await sharp('public/images/logo.png')
            .extract({ left: 199, top: 214, width: 626, height: 500 }) 
            .toFile('public/images/logo-icon.png');
            
        console.log("Success! Custom globe logo saved");
    } catch (e) {
        console.error(e);
    }
}
processImage();
