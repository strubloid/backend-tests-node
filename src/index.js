"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// loading the data from the test-input.txt file
var inputData = fs.readFileSync("./src/test-input.txt", "utf-8");
var numbers = inputData.split(",").map(Number);
console.log("wHARR?");
// we loop though the numbers and call the solution
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    solution(number);
}
function solution(N) {
    // step 1: get the binary representation of the number
    var binary = N.toString(2);
    console.log(binary);
    // step 2: split the binary representation by 1, and get the lengths of the resulting arrays
    var gaps = binary.split("1").map(function (arr) { return arr.length; });
    console.log(gaps);
    console.log("wHARR?");
    return 0;
}
console.log("Hello world");
