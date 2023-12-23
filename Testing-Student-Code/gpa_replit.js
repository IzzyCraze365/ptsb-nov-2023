let grades = {
    midterm: { grade: 3.3, weight: 1 },
    project: { grade: 4.0, weight: 1 },
    final: { grade: 3.2, weight: 2 }
  }
  
  function gpa(someGrades) {
    let gradesum = 0;
    let weightsum = 0;
    Object.keys(someGrades).forEach(test => {
        console.log("Test",test);
        console.log("test.grade", someGrades[test].grade);
        gradesum = gradesum + (someGrades[test].grade * someGrades[test].weight);
        console.log("test.weight", someGrades[test].weight);
        weightsum += someGrades[test].weight;
    });
console.log("someGrades =",someGrades);
console.log("gradesum =", gradesum );
console.log("weightsum =", weightsum );


return gradesum / weightsum;
/* let finalGPA = gradesum / weightsum;
return finalGPA; */

/* let weightedGrade = someGrades.forEach(test => {(test.grade * test.weight)
        console.log(gradesToWeight)    
    }); */

  }
  
  
/* Final should look like this
  Midterm = 3.3 * 1 = 3.3
  Project = 4.0 * 1 = 4.0
  Final = 3.2 * 2 = 6.4
  Final Weighted Grade: 13.7 / 4

*/


  console.log('The final GPA is ' + gpa(grades));
  // should print: 'The final GPA is 3.425'