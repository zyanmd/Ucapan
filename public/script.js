function updateCard() {
    const message = document.getElementById("message").value;
    const bold = document.getElementById("bold").checked;
    const italic = document.getElementById("italic").checked;
    const cardImage = document.getElementById("cardImage");

    // Update gambar dengan teks dan gaya baru
    cardImage.src = `/api/generate-card?text=${encodeURIComponent(message)}&bold=${bold}&italic=${italic}`;
}

function downloadCard() {
    const message = document.getElementById("message").value;
    const bold = document.getElementById("bold").checked;
    const italic = document.getElementById("italic").checked;
    const link = document.createElement("a");
    
    // Unduh gambar dengan teks
    link.href = `/api/generate-card?text=${encodeURIComponent(message)}&bold=${bold}&italic=${italic}`;
    link.download = "kartu-ucapan.png";
    link.click();
}

// Set gambar awal
document.addEventListener("DOMContentLoaded", updateCard);
