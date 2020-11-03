/*
#232 https://leetcode.com/problems/implement-queue-using-stacks
*/

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

class QueueTwoStacks {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  //Time: O(1)
  enqueue(item) {
    this.first.push(item);
  }

  //Time: O(N) N: number of items in the stack total
  dequeue() {
    let secondStackPop = this.second.pop();

    let firstStackPeek = this.first.peek();
    if(!secondStackPop && firstStackPeek) {
      while(firstStackPeek) {
        const firstStackPop = this.first.pop();
        this.second.push(firstStackPop);

        firstStackPeek = this.first.peek();
      }
      
      secondStackPop = this.second.pop();
    } else if(!secondStackPop && !firstStackPeek) {
      //throw error: both stack is empty;
    }

    return secondStackPop;
  }

  peek() {
  }
}

module.exports = {QueueTwoStacks};