import { solution } from "./counterLazy";
export function taskCounterLazy() {
    const N = 5;
    const A = [3, 4, 4, 6, 1, 4, 4];

    let result = solution(N, A);
    console.log(result);

    return result;
}
