const age = 20;

//Basic ternary operator
const canVote_verdict = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote_verdict); // This will output "Yes, you can vote."

//Nested ternary operator
const lifeStage = age < 13 ? "Child" : age < 20 ? "Teenager" : age < 65 ? "Adult" : "Senior";
console.log(lifeStage); // This will output "Teenager"

//Tenary in template literals
console.log(`You are classified as: ${age >= 18 ? "an adult" : "a minor"}.`); // This will output "You are classified as: an adult."

//With function call
const checkeven_odd = (num) => num % 2 === 0 ? "Even" : "Odd";
console.log(checkeven_odd(5)); // This will output "Odd"
console.log(checkeven_odd(10)); // This will output "Even"
