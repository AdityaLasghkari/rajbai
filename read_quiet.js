const Tesseract = require('tesseract.js');
const fs = require('fs');

async function extractText() {
    const specs = [
        "public/products/1121 Golden Sella Specs.jpeg",
        "public/products/1121 White Sella Specs.jpeg",
        "public/products/1509 Golden Sella Specs.jpeg",
        "public/products/1509 White Sella specs.jpeg"
    ];

    let result = '';

    for (const spec of specs) {
        if (fs.existsSync(spec)) {
            result += `--- ${spec} ---\n`;
            try {
                const { data: { text } } = await Tesseract.recognize(spec, 'eng', { logger: m => { } });
                result += text + '\n';
            } catch (error) {
                result += `Error: ${error.message}\n`;
            }
        }
    }
    fs.writeFileSync('clean_specs.txt', result, 'utf8');
}

extractText();
