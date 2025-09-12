/**
 * Definition for singly-linked list.
 * @param {number} val
 * @param {ListNode|null} next
 */
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Convert array -> linked list
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next; // head of list
}

// Convert linked list -> array
function listToArray(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Reverse linked list
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

// --- Example run ---
let head = arrayToList([1, 2, 3, 4, 5]); // build list
let reversedHead = reverseList(head);    // reverse it
console.log(listToArray(reversedHead));  // [5, 4, 3, 2, 1]