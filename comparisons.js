// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false;
console.log("Is the number of teacheers equal to the number of students?", numberTeachers > numberStudents);
// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("is numberTeachers not equal to numberStudents?", numberTeachers  !== numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("is numberStudents greather than or equal to 20",  numberStudents >=20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("is numberStudents greater than or equal to 21?", numberStudents >=21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("is numberStudents less than or equal to 20?", numberStudents <=20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("is numberStudents less than or equal to 21?", numberStudents <=21);



var numberCats = 5
var numberDogs1 = 2

console.log("Is the number of cats equal to the number of dogs?", numberCats === numberDogs1);

console.log("Is the number of cats greather than the number of dogs?", numberCats > numberDogs1);

console.log("Is the number of dogs greater than the number of cats in our friend group?", numberDogs > numberCats);



// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
//The statement will return whether 4 is less than 9.
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// This statement will return whether 4 is greather than the number [of] books.
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// This statement will return that the number friends is larger than the number siblings.

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: Explain.
// This statement will return that the number attendees is not equal to the number meals.

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
// The final line of cose came back as 1, because we didn't establish a variable
// to determine a puppy.
