// Object destructuring
const person = {
    name: "John",
    age: 25,
};

// Destructuring assignment
const { name, age } = person;
console.log(name); // This will output "John"
console.log(age);  // This will output 25

//Array destructuring
const rgb = [255, 200, 100];
const [red, green, blue] = rgb;
console.log(red);   // This will output 255
console.log(green); // This will output 200
console.log(blue);  // This will output 100

// nested destructuring
const student = {
    id: 1,
    name: "Alice",
    grades: {
        math: 90,
        science: 85
    }
};
const { name: studentName, grades: { math, science } } = student;
console.log(studentName); // This will output "Alice"
console.log(math);    // This will output 90
console.log(science); // This will output 85    

//Destructuring in function parameters
function displayPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);// Template literals used to input variables in string
}
displayPerson(person); // This will output "Name: John, Age: 25"