import * as fs from "fs";
import { solution } from "./ciclingRotation";

// Main task function
export function taskCiclingRotation() {
    const exampleA1 = [1, 2, 3, 4];
    const exampleK1 = 4;
    const result1 = solution(exampleA1, exampleK1);
    console.log("Result for exampleA1 and exampleK1:", result1);

    const A1 = [3, 8, 9, 7, 6];
    const K1 = 3;
    const result2 = solution(A1, K1);
    console.log("Result for A1 and K1:", result2);

    const A2 = [0, 0, 0];
    const K2 = 1;
    const result3 = solution(A2, K2);
    console.log("Result for A2 and K2:", result3);

    const A3 = [3, 8, 9, 7, 6];
    const K3 = 3;
    const result4 = solution(A3, K3);
    console.log("Result for A3 and K3:", result4);
}
