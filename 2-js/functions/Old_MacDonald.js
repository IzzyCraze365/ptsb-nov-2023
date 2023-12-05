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
singOldMacDonald("pig", "oink");
singOldMacDonald("cow", "moo");
singOldMacDonald("horse", "neigh");
singOldMacDonald("cat", "meow");
singOldMacDonald("dog", "woof");
singOldMacDonald("trebuchet", "swing");

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