document.addEventListener("DOMContentLoaded", () => {
    const images = ["images/eu.jpg", "images/eu4.jpg", "images/eu5.jpg"];
    let i= 0;

    const mainPhoto = document.getElementById("main-photo");
    const prevBtn = document.getElementById("botaovoltar");
    const nextBtn = document.getElementById("botaoseguir");

    prevBtn.addEventListener("click", () => {
        i = (i - 1 + images.length) % images.length;
        mainPhoto.src = images[i];
    });

    nextBtn.addEventListener("click", () => {
        i = (i + 1) % images.length;
        mainPhoto.src = images[i];
    });
});
