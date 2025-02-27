const express = require("express");
const path = require("path");
const generateCard = require("./generate-card");

const app = express();

// Middleware untuk file statis
app.use(express.static(path.join(__dirname, "public")));

// Endpoint API untuk membuat kartu ucapan
app.get("/api/generate-card", async (req, res) => {
    const { text = "Selamat!", bold = "false", italic = "false" } = req.query;

    // Generate gambar kartu
    const imageBuffer = generateCard(text, bold, italic);

    // Kirim hasil sebagai PNG
    res.setHeader("Content-Type", "image/png");
    res.status(200).end(imageBuffer);
});

// Ekspor app untuk Vercel (tanpa listen)
module.exports = app;
