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

export function taskBSTSearch() {
    return findInOrderSuccessor(9, scope);
}
