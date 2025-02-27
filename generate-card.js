const { createCanvas } = require("canvas");

function generateCard(text = "Selamat!", bold = false, italic = false) {
    const width = 500;
    const height = 300;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    // Latar belakang kertas
    ctx.fillStyle = "#f8f1e4";
    ctx.fillRect(0, 0, width, height);

    // Tentukan gaya teks
    let fontStyle = "";
    if (bold === "true") fontStyle += "bold ";
    if (italic === "true") fontStyle += "italic ";
    
    ctx.font = `${fontStyle}40px Caveat`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Efek shadow
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;

    // Stroke teks (garis luar)
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#3e2723";
    ctx.strokeText(text, width / 2, height / 2);

    // Isi teks
    ctx.fillStyle = "#5d4037";
    ctx.fillText(text, width / 2, height / 2);

    return canvas.toBuffer();
}

module.exports = generateCard;
