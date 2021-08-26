Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (yay) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + yay + '"/>';
    });
}

console.log("ml5 verson", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/k6q9Hhf5d/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model loaded wooho!");
}