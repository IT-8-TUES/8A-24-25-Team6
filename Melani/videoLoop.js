document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bg-video");
    if (video) {
      video.loop = true;
      video.addEventListener("timeupdate", () => {
        if (video.currentTime >= video.duration - 0.1) {
          video.currentTime = 0;
          video.play();
        }
      });
    }
  });