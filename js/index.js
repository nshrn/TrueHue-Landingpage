const featureImages = [
    "assets/features/01.png",
    "assets/features/02.png",
    "assets/features/03.png",
    "assets/features/04.png",
    "assets/features/05.png",
    "assets/features/06.png",
    "assets/features/07.png",
    "assets/features/08.png",
    "assets/features/09.png",
    "assets/features/10.png",
    "assets/features/11.png",
    "assets/features/12.png",
    "assets/features/13.png",
    "assets/features/14.png",
    "assets/features/15.png",
    "assets/features/16.png"
];
let currentFeatureIndex = 0;

function showFeature(index) {
    const img = document.getElementById("featureImage");
    img.src = featureImages[index];
}

function nextFeature() {
    currentFeatureIndex = (currentFeatureIndex + 1) % featureImages.length;
    showFeature(currentFeatureIndex);
}

function prevFeature() {
    currentFeatureIndex = (currentFeatureIndex - 1 + featureImages.length) % featureImages.length;
    showFeature(currentFeatureIndex);
}
