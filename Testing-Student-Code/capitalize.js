function capitalize(someWord) {
  console.log("slice example", someWord.slice(1));

  let firstLetter = someWord.charAt(0).toUpperCase();
  let restofWord = someWord.slice(1);
  let newWord = firstLetter + restofWord;


  return someWord.charAt(0).toUpperCase() + someWord.slice(1);

  // your code here
}
console.log(capitalize("tomato")); // should print 'Tomato'
console.log(capitalize("BACON")); // should print 'Bacon'
console.log(capitalize("LeTTuCe")); // should print 'Lettuce'
console.log(capitalize("mayonnAISE")); // should print 'Mayonnaise'
