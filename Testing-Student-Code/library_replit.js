//Ashok's Library Replit
let library = [
    {
      title: "A Game of Thrones",
      tags: ["fantasy", "george r.r. martin"],
    },
    {
      title: "Eloquent JavaScript",
      tags: ["technology", "programming", "marijn haverbeke"],
    },
    {
      title: "The Fellowship of the Ring",
      tags: ["fantasy", "jrr tolkien"],
    },
    {
      title: "The Return of the King",
      tags: ["fantasy", "jrr tolkien"],
    },
    {
      title: "The Anthropocene Reviewed",
      tags: ["nonfiction", "john green"],
    },
    {
      title: "The Left Hand of Darkness",
      tags: ["sci-fi", "ursula le guin "],
    },
  ];
  

function search(tag){
let searchedMovie = library.filter((movie) => movie.tags[0] === tag);
/* console.log(library);
console.log(library[0].tags[1]);
console.log(library.tags[0]); */
return searchedMovie
}

  
  console.log("Search Fantasy",search("fantasy"));
  console.log("Search sci-fi",search("sci-fi"));
  console.log("Search nonfiction",search("nonfiction"));
  console.log("Search technology",search("technology"));
  


  function search2(tag){
   let searchedMovie = library.filter(
    function(somebook)
    {if(somebook.tags.includes(tag)){
      return somebook
    }} )
      return somebook};