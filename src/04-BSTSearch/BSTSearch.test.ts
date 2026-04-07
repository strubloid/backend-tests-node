import { findInOrderSuccessor } from "./BSTSearch";
import type { BSTNode } from "./BSTSearch";

let scope: BSTNode = {
    value: 20,
    left: {
        value: 9,
        left: {
            value: 5,
            left: null,
            right: null,
        },
        right: {
            value: 12,
            left: {
                value: 11,
                left: null,
                right: null,
            },
            right: {
                value: 14,
                left: null,
                right: null,
            },
        },
    },
    right: {
        value: 25,
        left: null,
        right: null,
    },
};

describe("BST", () => {
    it("find the in-order successor of a 9", () => {
        // we find the in-order successor of the node with value 9
        const result = findInOrderSuccessor(9, scope);

        // we expect the result to be 11
        expect(result).toBe(11);
    });

    it("find the in-order successor of a 14", () => {
        // we find the in-order successor of the node with value 14
        const result = findInOrderSuccessor(14, scope);

        // we expect the result to be 20
        expect(result).toBe(20);
    });

    it("find the in-order successor of a 25", () => {
        // we find the in-order successor of the node with value 25
        const result = findInOrderSuccessor(25, scope);

        // we expect the result to be null
        expect(result).toBe(null);
    });

    it("find the in-order successor of a 5", () => {
        // 5 is a leaf with no right subtree — successor is the ancestor where we last went left
        const result = findInOrderSuccessor(5, scope);

        expect(result).toBe(9);
    });

    it("find the in-order successor of a 11", () => {
        // 11 is a leaf with no right subtree — last left-turn ancestor is 12
        const result = findInOrderSuccessor(11, scope);

        expect(result).toBe(12);
    });

    it("find the in-order successor of a 20", () => {
        // 20 is the root and has a right subtree — leftmost node of right subtree is 25
        const result = findInOrderSuccessor(20, scope);

        expect(result).toBe(25);
    });
});
