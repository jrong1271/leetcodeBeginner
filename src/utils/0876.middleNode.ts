// Difficulty: Easy
// Level: 1
// Problem: Given a non-empty, singly linked list with head node head, return a middle node of linked list.
// If there are two middle nodes, return the second middle node.
// Constraints: The number of nodes in the given list will be between 1 and 100.
//
// Example 1:
// Input: [1,2,3,4,5]
// Output: [3,4,5]

// Definition for singly-linked list node.
export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Function to create a linked list from an array
export function createLinkedList(nums:number[]): ListNode | null {
  const head = new ListNode(nums[0]); // First node
  let current = head;

  for (let i = 1; i < nums.length; i++) {
    current.next = new ListNode(nums[i], null); // Create and link new node
    current = current.next; // Move to the new node
  }

  return head;
}
export function middleNode(head: ListNode | null): ListNode | null {
  let fast: ListNode | null = head;
  let slow = fast;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    if (slow !== null) {
      slow = slow.next;
    }
  }
  return slow;
}