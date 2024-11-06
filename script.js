const images = [
    "elenco/giovanni/my.jfif",
    "elenco/gaby/ead7c92f-cfd6-4d60-980a-6a0a18e791c2.jfif",
    "elenco/vinicius/e892aa34-f4ba-44a6-901a-bfcc79d31806.jfif",
    "elenco/rafael/baruckk.jpg"
];

let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentIndex];
}

setInterval(nextImage, 3000);
