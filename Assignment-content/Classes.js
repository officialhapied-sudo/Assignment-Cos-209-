// Firstly Define a class named Person
class Person {
    // ADD in a constructor that takes name and age as parameters and initializes the class when person is called
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

// Method linked with this class
    greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }   

// using a getter to find out whether the person is an adult or not
    get isAdult() {
        return this.age >= 18;
    }
}

// Inheritance

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    study() {
        console.log(`${this.name} is studying.`);
    }

// You can also override methods from the parent class
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and my student ID is ${this.studentId}.`);
    }
}
// Now how we use this class
const person1 = new Person("Alice", 30);
person1.greet();
console.log(`Is adult: ${person1.isAdult}`);
// Note: This should output "Is adult: true" since Alice is 30 years old and also greet method is called

const student1 = new Student("Bob", 20, "S12345");
student1.greet();
student1.study();
console.log(`Is adult: ${student1.isAdult}`);