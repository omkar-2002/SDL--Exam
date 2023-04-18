alert("Hello, world!");


const WEEKS_IN_YEAR = 52;
const YEARS_IN_LIFETIME = 80;
const AVERAGE_WEEKS_IN_LIFETIME = WEEKS_IN_YEAR * YEARS_IN_LIFETIME;
console.log(`The average number of weeks in a human lifetime is ${AVERAGE_WEEKS_IN_LIFETIME}.`);


let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(`Hello, my name is ${fullName}.`);


let now = new Date();
let hour = now.getHours();
let timeOfDay = "";

if (hour >= 5 && hour < 12) {
  timeOfDay = "morning";
} else if (hour >= 12 && hour < 18) {
  timeOfDay = "afternoon";
} else {
  timeOfDay = "night";
}

// console.log(`Good ${timeOfDay}!`);

let outputElement = document.getElementById("output");
outputElement.innerHTML = `Good ${timeOfDay}!`;
