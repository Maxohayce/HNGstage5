if (navigator && navigator.mediaDevices) {
  const options = {
    audio: false,
    video: { facingMode: "user", width: 200, height: 200 },
  };
  navigator.mediaDevices
    .getUserMedia(options)
    .then(function (stream) {
      var video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
      };
    })
    .catch(function (err) {
      //Handle error here
    });
} else {
  console.log("camera API is not supported by your browser");
}
