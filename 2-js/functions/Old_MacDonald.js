//! JOHN'S CHALLENGE
// Paste these instructions into Discord
// How to Paste Codeblock in discord use 3 backticks , make new line and end with 3 backticks on a new line
// if you type ```Javascript, it will color code your text block

// ? Old Macdonald Sing Along

/* 
I want to create a function that takes in 2 paramenters
- The first parameter will be an animal
- The second parameter will be the sound the animal makes


Create a function that takes those parameters and will output a verse from the song:
! "Old MacDonald Had A Farm"
-Use string interpolation, to incorperate your parametes into the song.
-Call the function at least 3 times, with 3 different animals and sounds.


! Example with "cow" & "moo"
Old MacDonald had a farm,
    Ee i ee i o!
And on his farm he had some cows,
    Ee i ee i oh!
With a moo-moo here,
    And a moo-moo there.
Here a moo, there a moo,
    Everywhere a moo-moo.
Old MacDonald had a farm,
    Ee i ee i o!!!


TODO Bonus Challanges
1 - Have the function return it, and then Output the song to the window

2- If(you wrote a Traditional Function === true){
    return (create a new version that utilizes Arrow Functions)
} else{
    return (create a Traditional function from your arrow function)
}

 */


// Traditional Function
function singOldMacDonald(animal, sound) {
  console.log(`
  Old MacDonald had a farm,
      Ee i ee i o!
  And on his farm he had some ${animal}s,
      Ee i ee i oh!
  With a ${sound}-${sound} here,
      And a ${sound}-${sound} there.
  Here a ${sound}, there a ${sound},
      Everywhere a ${sound}-${sound}.
  Old MacDonald had a farm,
      Ee i ee i o!!!`);
    }

console.log("THIS IS THE TRADITIONAL FUNCTION");
oldMacDonaldSingAlong("buffalo","quack");
oldMacDonaldSingAlong("rooster","cockadoodledoo")
oldMacDonaldSingAlong("dog","woof")
oldMacDonaldSingAlong("cat","meow")
oldMacDonaldSingAlong("pig","oink")
oldMacDonaldSingAlong("catapult","swing")

// Arrow Function
let sing_E_I_E_I_O = (animal, sound) => {
  console.log(`
Old MacDonald had a farm,
    Ee i ee i o!
And on his farm he had some ${animal}s,
    Ee i ee i oh!
With a ${sound}-${sound} here,
    And a ${sound}-${sound} there.
Here a ${sound}, there a ${sound},
    Everywhere a ${sound}-${sound}.
Old MacDonald had a farm,
    Ee i ee i o!!!`);
};

console.log("THIS IS THE ARROW FUNCTION");
sing_E_I_E_I_O("pig", "oink");
sing_E_I_E_I_O("cow", "moo");
sing_E_I_E_I_O("horse", "neigh");
sing_E_I_E_I_O("cat", "meow");
sing_E_I_E_I_O("dog", "woof");
sing_E_I_E_I_O("trebuchet", "swing");