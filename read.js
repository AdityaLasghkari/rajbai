const Tesseract = require('tesseract.js');
const fs = require('fs');

async function extractText() {
    const specs = [
        "public/products/1121 Golden Sella Specs.jpeg",
        "public/products/1121 White Sella Specs.jpeg",
        "public/products/1509 Golden Sella Specs.jpeg",
        "public/products/1509 White Sella specs.jpeg"
    ];

    for (const spec of specs) {
        if (fs.existsSync(spec)) {
            console.log(`Extracting text from: ${spec}`);
            try {
                const { data: { text } } = await Tesseract.recognize(spec, 'eng');
                console.log(text);
                console.log("-------------------------------------------------");
            } catch (error) {
                console.error(`Failed to process ${spec}`, error);
            }
        } else {
            console.log(`Not found: ${spec}`);
        }
    }
}

extractText();
