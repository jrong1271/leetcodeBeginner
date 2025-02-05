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
    slow = slow.next;
  }
  return slow;
}