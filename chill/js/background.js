const images = [
    "bg1.png",
    "bg2.jpg",
    "bg3.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.className = "img-background";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);