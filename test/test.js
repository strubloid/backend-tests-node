"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
const fs_1 = require("fs");
// Test add function
console.log('add(2, 3) =', (0, index_1.add)(2, 3));
// Prepare a sample text file
const samplePath = './test/sample.txt';
(0, fs_1.writeFileSync)(samplePath, 'Hello, TypeScript!');
// Test loadTextFile function
const content = (0, index_1.loadTextFile)(samplePath);
console.log('Loaded text:', content);
