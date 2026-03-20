function getToRotate(A: number[], K: number, arraySize: number) {
    // we get the number of rotations
    const numberOfRotations = K % arraySize;

    // we create a new array to load the rotated values
    const result: number[] = [];

    // we we iterate through the original array
    for (let i = 0; i < arraySize; i++) {
        // we calculate the new position for each element after the rotation
        const newPosition = (i + numberOfRotations) % arraySize;

        // we add the result of this position into the result array
        result[newPosition] = A[i];
    }

    return result;
}

export function solution(A: number[], K: number): number[] {
    // size of the array
    let arraySize = A.length;

    // loaing check variables
    let needsRotation = K % arraySize === 0;

    // if we have an empty array or no rotation is needed, we return the original array
    if (A.length === 0 || needsRotation) {
        return A;
    }

    return getToRotate(A, K, arraySize);
}
