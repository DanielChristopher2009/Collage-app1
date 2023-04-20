var speechRecognition = window.webkitSpeechRecognition
var recognition = new speechRecognition()

function Start() {

    recognition.start()

}
recognition.onresult = function (event) {
    console.log(event)
    var content = event.results[0][0].transcript

    console.log(content)
    if (content = "take my selfie") {
        console.log("taking selfie...")
        speak1()
    }
}
camera = document.getElementById("camera")

function speak1() {
    var synth = window.speechSynthesis
    var utterthis = new SpeechSynthesisUtterance("Taking your selfie in 5 seconds")
    synth.speak(utterthis)

    Webcam.attach(camera)
    setTimeout(function () {
        img_id = "selfie1"
        takesnapshot()
        var utterthis = new SpeechSynthesisUtterance("Taking your selfie in 10 seconds")
        synth.speak(utterthis)
    }, 5000)

    setTimeout(function () {
        img_id = "selfie2"
        takesnapshot()
        var utterthis = new SpeechSynthesisUtterance("Taking your selfie in 15 seconds")
        synth.speak(utterthis)
    }, 10000)
    setTimeout(function () {
        img_id = "selfie3"
        takesnapshot()
    }, 15000)
}
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
})

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        if (img_id == "selfie1") {
            document.getElementById("result1").innerHTML = '<img id="selfie_image" src = "' + data_uri + '">'
        }
        if (img_id == "selfie2") {
            document.getElementById("result2").innerHTML = '<img id="selfie_image" src = "' + data_uri + '">'
        }
        if (img_id == "selfie3") {
            document.getElementById("result3").innerHTML = '<img id="selfie_image" src = "' + data_uri + '">'
        }

    })

}