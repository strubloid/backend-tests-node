import * as fs from "fs";
import { binaryGap } from "./binaryGap";

// Main task function
export function taskBinaryGap() {
    // loading the data from the test-input.txt file
    const inputData: string = fs.readFileSync("./src/test-input.txt", "utf-8");

    // loading each number
    const numbers = inputData.split(",").map(Number);

    // we loop though the numbers and call the solution
    for (const number of numbers) {
        binaryGap(number);
    }
}
