const age = 20;

//Basic ternary operator
const canVote_verdict = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote_verdict); // This will output "Yes, you can vote."

//Nested ternary operator
const lifeStage = age < 13 ? "Child" : age < 20 ? "Teenager" : age < 65 ? "Adult" : "Senior";
console.log(lifeStage); // This will output "Teenager"

//Te