
let currentLight = "Red";
trafficLight(currentLight);


function trafficLight(light) {
    if (light === "Red") {
      console.log("STOP");
    } else if (light === "Green") {
      console.log("GO!!!!");
    } else if (light === "Yellow") {
      console.log("Slow Down");
    } else {
      console.log(`${light} is not a valid option`);
    }
  }


  function snackTime(food) {
      food = `Bring me home some ${food}`;
      return food;
    }


let treat = "Potatoes"
console.log(snackTime(treat));
