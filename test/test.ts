import { add, loadTextFile } from "../src/index";
import { writeFileSync } from "fs";

// Test add function
console.log("add(2, 3) =", add(2, 3));

// Prepare a sample text file
const samplePath = "./test/sample.txt";
writeFileSync(samplePath, "Hello, TypeScript!");

// Test loadTextFile function
const content = loadTextFile(samplePath);
console.log("Loaded text:", content);
