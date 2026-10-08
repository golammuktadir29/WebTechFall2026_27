let name = prompt("Enter student name:");
let age = Number(prompt("Enter student age:"));
let cgpa = Number(prompt("Enter CGPA:"));
let status = prompt("Enter student status:");
let grade = prompt("Enter student grade:");

console.log("Name:", name);
console.log("Age:", age);
console.log("CGPA:", cgpa);
console.log("Status:", status);
console.log("Grade:", grade);

let courses = ["Web Technology", "OOP", "Database"];

for (let i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

let marks = Number(prompt("Enter marks:"));

if (marks >= 80) {
  console.log("Grade: A+");
} else if (marks >= 70) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: F");
}

function showStudent(name, age) {
  console.log("Name:", name);
  console.log("Age:", age);
}

showStudent(name, age);

let students = [];

for (let i = 0; i < 3; i++) {
  students[i] = prompt("Enter student " + (i + 1) + " name:");
}

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}
