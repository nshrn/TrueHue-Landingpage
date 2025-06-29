const featureImages = [
    "assets/features/live-view.png",
    "assets/features/take-photo-camera.png",
    "assets/features/live-view-filter-spot-image.png",
    "assets/features/live-view-filter-spot-image-2.png",
    "assets/features/live-view-filter-recolor-image.png",
    "assets/features/take-photo.png",
    "assets/features/upload-photo-gallery.png",
    "assets/features/upload-photo.png",
    "assets/features/color-library.png",
    "assets/features/color-library-game.png"
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
