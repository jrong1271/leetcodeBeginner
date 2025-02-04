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
  if (nums.length === 0) return null; // Return null if array is empty

  let head = new ListNode(nums[0]); // First node
  let current = head;

  for (let i = 1; i < nums.length; i++) {
    current.next = new ListNode(nums[i]); // Create and link new node
    current = current.next; // Move to the new node
  }

  return head;
}

export function printLinkedList(head: ListNode | null): void {
  let current = head;
  const values: number[] = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values.join(" -> "));
}

export function middleNode(head: ListNode | null): ListNode | null {
  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  // Loop until the fast pointer reaches the end of the list
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};