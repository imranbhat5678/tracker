const video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        alert("Camera permission denied or no camera found!");
        console.error(err);
    });