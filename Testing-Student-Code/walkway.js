class Location {
    constructor (name, description) {
      this.name = name; this.description = description;
    }
    // your code here
    
  }
  
  let home = new Location("home", "You are at your humble abode."/* your code here */);
  let sidewalk = new Location("sidewalk", "You are on the sidewalk."/* your code here */);
  let store = new Location("store", "You are at the store."/* your code here */);
  
  let locationCurrent = "home";
  
  let locationLookUp = {
    "home": home,
    "sidewalk": sidewalk,
    "store": store,
    // your code here
  };
  
  let locationStates = {
    home: ["sidewalk"],
    sidewalk: ["home", "store"],
    store: ["sidwalk"],
    // your code here
  };
  
  console.log("You are at your house.");
  
  
  function moveLocation(newLocation) {
    if (locationStates[locationCurrent].includes(newLocation)) {
      locationCurrent = newLocation;
      console.log(locationCurrent);
      console.log(locationLookUp[locationCurrent].description);
    } else {
        console.log(locationCurrent);
      console.log(`You cannot go from ${locationCurrent} to ${newLocation}.`);
    }
    // your code here
  }
  
  moveLocation("sidewalk");
  // Prints 'You are on the sidewalk.'
  moveLocation("store");
  // Prints 'You are in the store.'
  moveLocation("home");
  // Prints 'You are at your house.'
  moveLocation("sidewalk");
  // Prints 'You are on the sidewalk.'
  moveLocation("home");
  // Prints 'You are at your house.'
  moveLocation("park");
  // Prints 'You cannot go from sidewalk to park.'
  