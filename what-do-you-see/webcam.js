document.addEventListener("DOMContentLoaded", () => {
    let video = document.getElementById("vid");
    let mediaDevices = navigator.mediaDevices;
    vid.muted = true;
    // Accessing the user camera and video.
    mediaDevices
        .getUserMedia({
            video: true,
            //audio: true,
        })
        .then((stream) => {
    //        alert('What do you see?');
            //Changing the source of video to current stream.
            video.srcObject = stream;
           video.addEventListener("loadedmetadata", () => {
                video.play();
            });
        })
        .catch(alert);
        
});

