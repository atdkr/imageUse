// @ts-ignore
const fs = require('fs');
const path = require("path");
// https://github.com/tkrkt/text2png
// npm install text2png
const text2png = require('text2png');
// const sharp = require('sharp');


const outputDir = path.join(__dirname, 'random_Img');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}


// fs.writeFileSync('out.png', text2png('Hello!', { color: 'blue' }));

// 讀取 input.txt 檔案
const inputText = fs.readFileSync('input.txt', 'utf8');

// 將每一行文字分割成陣列
const lines = inputText.split('\n');

// 設定圖片生成的選項
const options = {
    font: '12px 微軟中黑體',
    color: 'black',
    lineSpacing: 0,
    padding: 20,
    borderWidth: 1,
    borderColor: 'white',
    textAlign: 'center',
    width: 500
};

// 生成每一行文字的圖片
lines.forEach((line, index) => {
    const outputFileName = path.join(outputDir, `output${index + 1}.png`);
    const imageBuffer = text2png(line, options);
    fs.writeFileSync(outputFileName, imageBuffer);
    console.log(`Generated ${outputFileName}`);
});