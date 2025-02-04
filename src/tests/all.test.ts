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
    expect(canConstruct("a", "b")).toEqual(false);
    expect(canConstruct("aa", "ab")).toEqual(false);
    expect(canConstruct("aa", "aab")).toEqual(true);
  });
});

describe("twoSum", () => {
  it("should find the indexes of the integers that add up to the target value", () => {
    expect(twoSum([1, 2, 3], 5)).toEqual(expect.arrayContaining([1, 2]));
    expect(twoSum([1, 2, 3], 11)).toEqual([]);
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
    expect(middleNode(createLinkedList([1,2,3,4,5,6]))).toStrictEqual(createLinkedList([4,5,6]));
    expect(middleNode(createLinkedList([1,2,3,4,5]))).toStrictEqual(createLinkedList([3,4,5]));
  });
});

describe("reverse", () => {
  it("should return the input integer in reversed order", () => {
    expect(reverse(123)).toStrictEqual(321);
    expect(reverse(2147483648)).toStrictEqual(0);
    expect(reverse(-2147483648)).toStrictEqual(0);
  });
});



