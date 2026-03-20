import * as fs from "fs";
import { bitwiseOperations } from "./bitwiseOperations";

// Main task function
export function taskBitwiseOperations() {
    // loading the data from the test-input.txt file
    const inputData: string = fs.readFileSync("./src/test-bits.txt", "utf-8");

    // loading each number
    const numbers = inputData.split(",").map(Number);
    console.log("Starting:", numbers);

    const result = bitwiseOperations(numbers[0], numbers[1], numbers[2]);
    console.log("Results", result);
}
