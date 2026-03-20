// Example function to test
export function add(a: number, b: number): number {
    return a + b;
}

// Example function to load a text file
import { readFileSync } from "fs";

export function loadTextFile(path: string): string {
    return readFileSync(path, "utf-8");
}
