const sharp = require('sharp');

async function processImage() {
    try {
        // First trim the whitespace to find out where the actual content is
        const v = await sharp('public/images/logo.png')
            .trim()
            .toBuffer({ resolveWithObject: true });
        
        console.log("Trim info:", v.info);
    } catch (e) {
        console.error(e);
    }
}
processImage();
