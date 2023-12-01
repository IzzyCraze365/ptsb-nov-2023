let city = [
  "building",
  "sign",
  "window",
  "bridge",
  "lighthouse",
  "light pole",
  "tree",
  "empty street",
];

let structure = city[0];
let pos = 0;

while (structure != "empty street") {
  // console.log(`Spiderman swings from the ${structure}`);
  pos++;

  structure = city[pos];
}

// console.log(`Spider man is landing in the ${structure}`);

let spidyHP = 20;
let badGuys = [
  {
    baddie: "Green Goblin",
    hp: 15,
  },
  {
    baddie: "Venom",
    hp: 25,
  },
  {
    baddie: "Stilt-man",
    hp: 5,
  },
  {
    baddie: "Thug",
    hp: 0,
  },
];

/*
  ?   Do while
  
      do {
        ...code block
      } while (expression)
  
      - works just like a while loop with the exception that it will run our code block at least once.
  
  */

let random = Math.floor(Math.random() * badGuys.length);
// console.log(random);
let villain = badGuys[random];
// console.log(villain);

console.log(`${villain.baddie} has appeared.`);

do {
  if (villain.baddie === "Thug") {
    console.log("Spider-Man webs the thug... EZPZ");
    break;
  }

  console.log(`${villain.baddie} hits Spider-Man!`);
  spidyHP--;
  console.log("Spider-Man HP:", spidyHP);

  let spidyHit = Math.floor(Math.random() * 3);
  console.log(`Spider-Man hits ${villain.baddie} for ${spidyHit} damage`);

  villain.hp -= spidyHit;
  console.log("Villain HP", villain.hp);

  if (spidyHP === 0) {
    break;
  }
} while (villain.hp > 0);

villain.hp <= 0
  ? console.log(`Spider-Man captures ${villain.baddie}`)
  : console.log(`${villain.baddie} has taken down Spider-Man`);
