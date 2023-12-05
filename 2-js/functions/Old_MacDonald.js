// Traditional Function
function singOldMacDonald(animal, sound) {
    console.log(`Old MacDonald had a farm,
      Ee i ee i o!
  And on his farm he had some ${animal}s,
      Ee i ee i oh!
  With a ${sound}-${sound} here,
      And a ${sound}-${sound} there.
  Here a ${sound}, there a ${sound},
      Everywhere a ${sound}-${sound}.
  Old MacDonald had a farm,
      Ee i ee i o!!!
  `);
  }
  
  singOldMacDonald("pig", "oink");
  singOldMacDonald("cow", "moo");
  singOldMacDonald("horse", "neigh");
  singOldMacDonald("cat", "meow");
  singOldMacDonald("dog", "woof");
  singOldMacDonald("trebuchet", "swing");
  
// Arrow Function
 let singOldMacDonald2 = (animal, sound) => { 
 console.log(`Old MacDonald had a farm,
    Ee i ee i o!
And on his farm he had some ${animal}s,
    Ee i ee i oh!
With a ${sound}-${sound} here,
    And a ${sound}-${sound} there.
Here a ${sound}, there a ${sound},
    Everywhere a ${sound}-${sound}.
Old MacDonald had a farm,
    Ee i ee i o!!!
  `)}

  singOldMacDonald2("pig", "oink");
  singOldMacDonald2("cow", "moo");
  singOldMacDonald2("horse", "neigh");
  singOldMacDonald2("cat", "meow");
  singOldMacDonald2("dog", "woof");
  singOldMacDonald2("trebuchet", "swing");