// Implement a Queue using Two Stacks

class QueueWithTwoStacks {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(item) {
      this.stack1.push(item);
    }
  
    dequeue() {
      if (this.stack2.length === 0) {
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      return this.stack2.pop();
    }
  }
  
  const queue = new QueueWithTwoStacks();
  queue.enqueue(1);
  queue.enqueue(2);
  console.log(queue.dequeue());  // Output: 1



  // Validate Parentheses



  function isValidParentheses(s) {
    const stack = [];
    const pairs = { '(': ')', '{': '}', '[': ']' };
    for (const char of s) {
      if (char in pairs) {
        stack.push(char);
      } else {
        if (pairs[stack.pop()] !== char) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  
  console.log(isValidParentheses("{[()]}"));  // Output: true



  // Detect a Cycle in a Linked List


  function hasCycle(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
  
  const head = { value: 1, next: { value: 2, next: { value: 3, next: head } } };
  console.log(hasCycle(head));  // Output: true


  // Merge Two Sorted Arrays


  function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
  }
  
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  console.log(mergeSortedArrays(arr1, arr2));  // Output: [1, 2, 3, 4, 5, 6]


  // Find the Intersection Point of Two Linked Lists


  function getIntersectionNode(headA, headB) {
    let currA = headA;
    let currB = headB;
    while (currA !== currB) {
      currA = currA ? currA.next : headB;
      currB = currB ? currB.next : headA;
    }
    return currA;
  }
  
 
  const headA = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
  const headB = { value: 4, next: headA.next };
  console.log(getIntersectionNode(headA, headB));  // Output: { value: 2, next: { value: 3, next: null } }


  // Implement a Priority Queue


  class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item, priority) {
      this.items.push({ item, priority });
      this.items.sort((a, b) => a.priority - b.priority);
    }
  
    dequeue() {
      return this.items.shift().item;
    }
  }
  
  const priorityQueue = new PriorityQueue();
  priorityQueue.enqueue("Task 1", 3);
  priorityQueue.enqueue("Task 2", 1);
  console.log(priorityQueue.dequeue());  // Output: "Task 2"



  // Find the Missing Number in an Array

  function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sum = (n * (n + 1)) / 2;
    const arrSum = arr.reduce((acc, num) => acc + num, 0);
    return sum - arrSum;
  }
  
  const numbers = [1, 2, 3, 5];
  console.log(findMissingNumber(numbers));  // Output: 4