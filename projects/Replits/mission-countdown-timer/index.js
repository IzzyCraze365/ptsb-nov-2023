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
  let countDown = 5;
  let time = setInterval(() => {
    if (countDown > 0) {
      intervalDisplay.textContent = countDown;
      console.log(countDown, "20"); //! TEST
      countDown--;
    } else if (countDown === 0) {
      intervalDisplay.textContent = "BLASTOFF!!!";
      console.log(countDown, "Blastoff"); //! TEST
      countDown--;
    } else {
      clearInterval(time);
      console.log("Pausing"); //! TEST
    }
  }, 1000);
  console.log(countDown, "22"); //! TEST
}

// TODO I did not use anything below this line

/* function startIntervalCount() {
  console.log("Start Countdown Button Clicked");
  let count = 5;
  setInterval(()=>{countdown, 1000, count};
  console.log("Test");
  /*  if (countDown === 0) {
      intervalDisplay.textContent = "BLASTOFF!!!";
      clearInterval(countDown)
  } else if (countDown > 0) {
      intervalDisplay.textContent = countDown;
  } else {
    intervalDisplay.textContent = "Launch Failed";
  } 
}
 */
function countdown(number) {
  console.log("COUNTDOWN FUNC", number);
  if (number > 0) {
    intervalDisplay.textContent = number;
    number--;
    console.log("Number", number);
  } else {
    intervalDisplay.textContent = "BLASTOFF!!!";
  }
  count = number;
  console.log("Number", number);
  console.log("Count", count);
  return count;
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
