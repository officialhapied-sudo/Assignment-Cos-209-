import { multiply,add,subtract,logoperation,getHistory} from "./calculation";
// Example usage of imported functions
const a = 5;
const b = 3;
const sum = add(a, b);
logoperation('add', a, b, sum);
const product = multiply(a, b);
logoperation('multiply', a, b, product);
const difference = subtract(a, b);
logoperation('subtract', a, b, difference);
console.log('Calculation History:', getHistory());
