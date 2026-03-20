function countSingleBits(number: number): number {
    let unsetBits = 0;
    let maxBit = 30;
    for (let i = 0; i < maxBit; i++) {
        if (((number >> i) & 1) === 0) unsetBits++;
    }
    return Math.pow(2, unsetBits);
}

function countPair(number1: number, number2: number): number {
    return countSingleBits(number1 | number2);
}

function countTriple(number1: number, number2: number, number3: number): number {
    return countSingleBits(number1 | number2 | number3);
}

export function bitwiseOperations(A: number, B: number, C: number): number {
    // step 1:  total count for A,B,C
    const totalCount = countSingleBits(A) + countSingleBits(B) + countSingleBits(C);

    // step 2: total for all pairs
    const pairCount = countPair(A, B) + countPair(B, C) + countPair(A, C);

    // step 3: total for triple
    const tripleCount = countTriple(A, B, C);

    // step 4: apply inclusion-exclusion principle
    return totalCount - pairCount + tripleCount;
}
