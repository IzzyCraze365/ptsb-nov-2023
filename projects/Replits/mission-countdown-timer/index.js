let startTimer = document.getElementById("start-timeout");
let timeoutDisplay = document.getElementById("timeout-display");
let startInterval = document.getElementById("start-interval");
let intervalDisplay = document.getElementById("interval-display");

startTimer.addEventListener("click", startCountdown);
startInterval.addEventListener("click", startIntervalCount);
timeoutDisplay.textContent = "GET READY?";

function startCountdown() {
  console.log("Get Ready Button Clicked");
  timeoutDisplay.textContent = "READY!!!";
}

function startIntervalCount() {
  console.log("Start Countdown Button Clicked");
  
  setInterval(countdown, 1000);
    console.log("Test");
 /*  if (countDown === 0) {
      intervalDisplay.textContent = "BLASTOFF!!!";
      clearInterval(countDown)
  } else if (countDown > 0) {
      intervalDisplay.textContent = countDown;
  } else {
    intervalDisplay.textContent = "Launch Failed";
  } */
}

function countdown(number) {
    
    console.log("COUNTDOWN FUNC", number)
    intervalDisplay.textContent = number;
    number--
    count = number;
/*     if (number === 0) {
        intervalDisplay.textContent = "BLASTOFF!!!";
        clearInterval(countDown)
    } else if (number > 0) {
        intervalDisplay.textContent = number;
        number--;
        count = number;
    } else {
      intervalDisplay.textContent = "Launch Failed";
    } */
}


/* function countdown(number) {
    for (count = 5; count >= 0; count--) {
        console.log("Line 21", count, number);
  }
}
 */