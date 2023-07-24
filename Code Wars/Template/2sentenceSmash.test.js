// Test cases using Chai assertions
const chai = require("chai");
const assert = chai.assert;
const smash = require("./1SentenceSmash");

chai.config.truncateThreshold = 0;

describe("smash", () => {
  it("Should return an empty string for an empty array.", () => {
    const result = smash([]);
    console.log("Result:", result); // Output the result to the console
    assert.strictEqual(result, "");
  });

  it("One word example should return the word.", () => {
    const result = smash(["hello"]);
    console.log("Result:", result); // Output the result to the console
    assert.strictEqual(result, "hello");
  });

  it("Should return the correct sentence.", () => {
    const words = ["hello", "world", "this", "is", "great"];
    const result = smash(words);
    console.log("Result:", result); // Output the result to the console
    assert.strictEqual(result, "hello world this is great");
  });
});
