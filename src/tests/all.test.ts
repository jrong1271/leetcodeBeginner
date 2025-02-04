import { describe, it, expect } from "vitest";

import { twoSum } from "../utils/1.twoSum";
import { reverse } from "../utils/2.reverse";
import { numberOfSteps } from "../utils/1342.numberOfSteps";
import { maximumWealth } from "../utils/1672.maximumWealth";
import { middleNode, createLinkedList } from "../utils/876.middleNode";
import { fizzBuzz } from "../utils/412.fizzBuzz";
import { canConstruct } from "../utils/283.canConstruct";
import { mergeAlternately } from "../utils/1768.mergeAlternately";

describe("mergeAlternately", () => {
  it("given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.", () => {
    expect(mergeAlternately("abc", "pqr")).toEqual("apbqcr");
    expect(mergeAlternately("ab", "pqrs")).toEqual("apbqrs");
    expect(mergeAlternately("abcd", "pq")).toEqual("apbqcd");
  });
});

describe("canConstruct", () => {
  it("Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise", () => {
    const ransomNote = "aa";
    const magazine = "ab";
    expect(canConstruct(ransomNote, magazine)).toEqual(false);
  });
});

describe("twoSum", () => {
  it("should find the indexes of the integers that add up to the target value", () => {
    const input = [1, 2, 3];
    const target = 5;
    const equalTo = [1, 2];
    expect(twoSum(input, target)).toEqual(expect.arrayContaining(equalTo));
  });
});
describe("numberOfSteps", () => {
  it("Given an integer num, return the number of steps to reduce it to zero.", () => {
    const num = 14;
    expect(numberOfSteps(num)).toEqual(6);
  });
});
describe("maximumWealth", () => {
  it("Given an m x n integer grid accounts, the wealth that the richest customer has.", () => {
    const num = [[1,2,3],[3,2,1]];
    expect(maximumWealth(num)).toEqual(6);
  });
});

describe("fizzBuzz", () => {
  it("Given an integer n, return a string array.", () => {
    const n = 15;
    const output = ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"];
    expect(fizzBuzz(n)).toEqual(output);
  });
});

describe("middleNode", () => {
  it("should return the middle node", () => {
    const input = createLinkedList([1,2,3,4,5,6]);
    const equalTo = createLinkedList([4,5,6]);
    expect(middleNode(input)).toStrictEqual(equalTo);
  });
});

describe("reverse", () => {
  it("should return the input integer in reversed order", () => {
    const input = 123;
    const equalTo = 321;
    expect(reverse(input)).toStrictEqual(equalTo);
  });
});



