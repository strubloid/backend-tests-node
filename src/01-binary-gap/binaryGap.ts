export function binaryGap(N: number): number {
    let maxGap = 0;

    // we check if isnt a valid number passed
    if (typeof N !== "number" || isNaN(N)) {
        throw new Error("Input must be a valid number");
    }

    // first we convert the number into binary string
    const binaryString = N.toString(2);

    console.log(`Binary String: ${binaryString}`);

    // we have the count of the gaps
    let currentGap = 0;

    let inGap = false;

    // we loop through the binary string
    for (const char of binaryString) {
        // we check if  te char is a number 1, so we can start the count
        if (char === "1") {
            // after we find the second 1, we need to put the highest value
            if (inGap) {
                maxGap = Math.max(maxGap, currentGap);
            }

            currentGap = 0;
            inGap = true;
        } else if (inGap) {
            currentGap++;
        }
    }

    return maxGap;
}
