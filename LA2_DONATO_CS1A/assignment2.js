//Variable initialization
let a = 11;
let b = 1;
let c = 25;
let d = "15"; 
const e = 15;

//1. Display combined sum
const sum = a + b + c + Number(d) + e;
console.log("Combined Sum:", sum); 

//2. Comparison operations
console.log("\nComparisons between d and e:");
console.log("d > e:", Number(d) > e); 
console.log("d < e:", Number(d) < e);
console.log("d <= e:", Number(d) <= e);
console.log("d >= e:", Number(d) >= e);
console.log("d === e:", Number(d) === e);

//3. Subtract all the values
const subtraction = a - b - c - Number(d) - e; 
console.log("\nSubtraction Result:", subtraction); 

//Multiply and divide
const multiplyDivide = (a * c) / e; 
console.log("Multiplication/Division Result:", multiplyDivide); 

// Exponent
const exponent = e ** c;
console.log("Exponent Result:", exponent); 

// 4. Reassignment attempt
try {
    console.log("\nReassignment Attempt:");
    c = 3; 
    console.log("New c value:", c); 
} catch (error) {
    console.log("Error:", error.message);
}