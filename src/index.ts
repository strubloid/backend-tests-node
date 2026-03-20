import * as fs from "fs";

// loading the data from the test-input.txt file
const inputData: string = fs.readFileSync("./src/test-input.txt", "utf-8");

const numbers = inputData.split(",").map(Number);
console.log("wHARR?");

// we loop though the numbers and call the solution
for (const number of numbers) {
    solution(number);
}

function solution(N: number): number {
    // step 1: get the binary representation of the number
    const binary = N.toString(2);
    console.log(binary);

    // step 2: split the binary representation by 1, and get the lengths of the resulting arrays
    const gaps = binary.split("1").map((arr) => arr.length);
    console.log(gaps);
    console.log("wHARR?");

    return 0;
}

console.log("Hello world");
