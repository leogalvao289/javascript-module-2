// You are given an object of student names and grades
// Loop through all the students' grades and console log the name and grade of the ones with grade more than 18
// Try to use both methods shown above to achieve this

const studentGrades = {
    tom: 20,
    george: 17,
    abdul: 19,
  };
  // for in = para entrar no objeto 
  for ( const name18 in studentGrades) {  
    if (studentGrades[name18] > 18){
     console.log(`${name18.toUpperCase()} - ${studentGrades[name18]}`)
  }
}
  // Prints
  // TOM - 20
  // ABDUL - 19