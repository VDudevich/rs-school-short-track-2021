const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const queueNode = new ListNode(element);
    if (this.head) {
      this.tail.next = queueNode;
      this.tail = queueNode;
    } else {
      this.head = queueNode;
      this.tail = queueNode;
    }
    this.length += 1;
  }

  dequeue() {
    const dequeuedElement = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return dequeuedElement.value;
  }
}

module.exports = Queue;
