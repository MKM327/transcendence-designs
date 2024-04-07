function setProgressBarWithTime(time) {
  let element = document.getElementById("progress-bar");
  let width = 100;
  let intervalTime = (time * 1000) / width; // Calculate the interval time
  let id = setInterval(frame, intervalTime);
  function frame() {
    if (width <= 0) {
      clearInterval(id);
    } else {
      width--;
      element.style.width = width + "%";
    }
  }
}

setProgressBarWithTime(1);
