export function binaryGap(N: number): number {
    // step 1: get the binary representation of the number
    const binary = N.toString(2);

    // step 2: find the sequences of zeros that are surrounded by ones
    let maxGap = 0;
    let currentGap = 0;
    let foundOne = false;

    // we loop the binary string and count the zeros between ones
    for (const char of binary) {
        // when we find a 1, we can check how many zeros we find
        if (char === "1") {
            // we only update the max gap if we find an 1 afterwards
            if (foundOne) {
                maxGap = Math.max(maxGap, currentGap);
            }

            foundOne = true;
            currentGap = 0;
        } else if (foundOne) {
            currentGap++;
        }
    }

    return maxGap;
}
