/*
https://leetcode.com/problems/reverse-linked-list/

Time: O(1)
Space: O(N) N: size of stack
*/

class MaxStack {
  constructor() {
    this.max = new Stack();
    this.items = new Stack();
  }

  //Time: O(1)
  push(item) {
    this.items.push(item);    
    let maxPeek = this.max.peek();

    if(!maxPeek || maxPeek <= item) {
      this.max.push(item);
    }
  }

  //Time: O(1)
  pop() {
    const popped = this.items.pop();
    
    if(this.max.peek() === popped) {
      this.max.pop();
    }

    return popped;
  }

  //Time: O(1)
  getMax() {
    return this.max.peek();
  }

}

class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

module.exports = {MaxStack};