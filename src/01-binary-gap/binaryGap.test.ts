import { binaryGap } from "./binaryGap";

describe("Binary Gap", () => {
    it("should return 2 gap for number 9", () => {
        // loading the binary gap
        const result = binaryGap(9);

        // expected result to be 2
        expect(result).toBe(2);
    });

    it("Should return gap 4 when is number 12", () => {
        // loading the binary gap
        const result = binaryGap(12);

        // expect to be none
        expect(result).toBe(0);
    });

    it("should count the highest gap for the number 529", () => {
        // loading the binary gap
        const result = binaryGap(529);

        // expect to be 4
        expect(result).toBe(4);
    });

    it("Should return the highest gap for the number 8713 that contains 3 gaps", () => {
        // loading the  binary gap
        const result = binaryGap(8713);

        // expect to be 4
        expect(result).toBe(5);
    });

    it("Should a gap for a negative number", () => {
        // loading the binary gap
        const result = binaryGap(-5);
        // expect to be 0
        expect(result).toBe(1);
    });

    it("Should return 0 when a number is 0", () => {
        // loading the binary gap
        const result = binaryGap(0);
        // expect to be 0
        expect(result).toBe(0);
    });

    it("should thrown an exeption when the input is not a number", () => {
        // we load the binary gap with a string that is not a number
        let testVariable = "not a number" as unknown as number;

        // we expect to throw an error with the message "Input must be a valid number"
        const errorMessage = "Input must be a valid number";

        try {
            const result = binaryGap(testVariable);

            // we check the result is null
            expect(result).toBeNull();
        } catch (error) {
            // we check that exists an error
            expect(error).toBeDefined();

            // we check that the error message is correct
            expect((error as Error).message).toBe(errorMessage);
        }
    });
});
