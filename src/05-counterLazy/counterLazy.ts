export function solution(numberToCheck: number, numberCollection: number[]): number[] {
    const counters = new Array(numberToCheck).fill(0);

    let currentMax = 0; // highest value of any counter
    let baseValue = 0; // lazy update baseline

    for (let i = 0; i < numberCollection.length; i++) {
        const operation = numberCollection[i];

        if (operation >= 1 && operation <= numberToCheck) {
            const index = operation - 1;

            // IMPORTANT: bring counter up to date if needed
            if (counters[index] < baseValue) {
                counters[index] = baseValue;
            }

            counters[index] += 1;

            // update max
            if (counters[index] > currentMax) {
                currentMax = counters[index];
            }
        } else if (operation === numberToCheck + 1) {
            // lazy update: don't touch all counters
            baseValue = currentMax;
        }
    }

    // Final pass to fix any outdated counters
    for (let i = 0; i < numberToCheck; i++) {
        if (counters[i] < baseValue) {
            counters[i] = baseValue;
        }
    }

    return counters;
}
