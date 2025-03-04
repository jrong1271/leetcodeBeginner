import { describe, it, expect } from "vitest";

import { twoSum } from "../utils/0001.twoSum";
import { reverse } from "../utils/0002.reverse";
import { canConstruct } from "../utils/0283.canConstruct";
import { fizzBuzz } from "../utils/0412.fizzBuzz";
import { middleNode, createLinkedList } from "../utils/0876.middleNode";
import { numberOfSteps } from "../utils/1342.numberOfSteps";
import { runningSum } from "../utils/1480.runningSum";
import { maximumWealth } from "../utils/1672.maximumWealth";
import { mergeAlternately } from "../utils/1768.mergeAlternately";
import { reverseString } from "../utils/test";

describe("reverseString", () => {
  it("Given a string, return the reverse of the string", () => {
    expect(reverseString("hello")).toEqual("olleh");
    expect(reverseString("world")).toEqual("dlrow");
  });
});

describe("runningSum", () => {
  it("Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]). Return the running sum of nums.", () => {
    expect(runningSum([1,2,3,4])).toEqual([1,3,6,10]);
    expect(runningSum([1,1,1,1,1])).toEqual([1,2,3,4,5]);
    expect(runningSum([3,1,2,10,1])).toEqual([3,4,6,16,17]);
  });
});

describe("mergeAlternately", () => {
  it("Given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.", () => {
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
  it("Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.", () => {
    expect(twoSum([2,7,11,15], 9)).toEqual(expect.arrayContaining([0, 1]));
    expect(twoSum([3,2,4], 6)).toEqual(expect.arrayContaining([1,2]));
    expect(twoSum([3,3], 6)).toEqual(expect.arrayContaining([0,1]));
    expect(twoSum([3,3], 7)).toEqual(expect.arrayContaining([]));
  });
});
describe("numberOfSteps", () => {
  it("Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.", () => {
    expect(numberOfSteps(14)).toEqual(6);
    expect(numberOfSteps(8)).toEqual(4);
  });
});
describe("maximumWealth", () => {
  it("Given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.", () => {
    expect(maximumWealth([[1,2,3],[3,2,1]])).toEqual(6);
    expect(maximumWealth([[1,5],[7,3],[3,5]])).toEqual(10);
    expect(maximumWealth([[2,8,7],[7,1,3],[1,9,5]])).toEqual(17);
  });
});

describe("fizzBuzz", () => {
  it("Given an integer n, return a string array answer (1-indexed) where: answer[i] == 'FizzBuzz' if i is divisible by 3 and 5.", () => {
    expect(fizzBuzz(3)).toEqual(["1","2","Fizz"]);
    expect(fizzBuzz(5)).toEqual(["1","2","Fizz","4","Buzz"]);
    expect(fizzBuzz(15)).toEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
  });
});

describe("middleNode", () => {
  it("Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.", () => {
    expect(middleNode(createLinkedList([1,2,3,4,5,6]))).toStrictEqual(createLinkedList([4,5,6]));
    expect(middleNode(createLinkedList([1,2,3,4,5]))).toStrictEqual(createLinkedList([3,4,5]));
    expect(middleNode(createLinkedList([1,2,3,4,5,6,7,8,9,10]))).toStrictEqual(createLinkedList([6,7,8,9,10]));
  });
});

describe("reverse", () => {
  it("Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.", () => {
    expect(reverse(123)).toStrictEqual(321);
    expect(reverse(2147483648)).toStrictEqual(0);
    expect(reverse(-2147483648)).toStrictEqual(0);
  });
});



