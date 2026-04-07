import * as fs from "fs";
import { binaryGap } from "./binaryGap";

// Main task function
export function taskBinaryGap() {
    // loding data from the test-input.txt
    const inputData: String = fs.readFileSync("./src/test-input.txt", "utf-8");

    // we split each number inside
    const numbers = inputData.split(",").map(Number);

    // loggin the numbers at console
    console.log("Running binary gap task: ", numbers);

    // running the function for each number in array
    numbers.forEach((number) => {
        const result = binaryGap(number);
        console.log(`Binary gap of ${number} is ${result}`);
    });
}
