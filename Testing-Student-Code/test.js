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
  
  function search(tag) {
    let result = library.tags[].filter((someBook)) {
      if (someBook.includes(tag)) {
      console.log(result)
    } else {
      return false
    }
  })
  
  }
  
  console.log(search("fantasy"));
  console.log(search("sci-fi"));
  console.log(search("nonfiction"));
  console.log(search("technology"));
  