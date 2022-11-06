import { BubbleSort } from "./Sort";

class Node {
  nextValue: Node | null = null;
  constructor(public value: number) {
    this.value = value;
    this.nextValue = null;
  }
}

export class SinglyLinkedList extends BubbleSort {
  head: Node | null;
  tail: Node | null;
  length: number;
  constructor() {
    super();
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: number): void {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) this.tail.nextValue = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  get(idx: number): Node | null {
    if (this.length === 0) throw new Error("The list is empty!");

    if (idx < 0 || idx > this.length) {
      return null;
    }

    if (this.length === 0) return null;
    let targetNode = this.head;

    for (let i = 0; i <= this.length; i++) {
      if (targetNode === null) break;
      if (idx === i) break;
      targetNode = targetNode.nextValue;
    }

    return targetNode;
  }

  compare(idx1: number, idx2: number): boolean {
    if (!this.length) {
      console.log("The list is empty!!");
    }

    const item1 = this.get(idx1);
    const item2 = this.get(idx2);
    if (item1 && item2) return item1.value > item2.value;
    return false;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const item1 = this.get(leftIndex);
    const item2 = this.get(rightIndex);
    if (item1 && item2) {
      [item1.value, item2.value] = [item2.value, item1.value];
    }
  }

  print(): void {
    let targetNode = this.head;

    for (let i = 0; i <= this.length; i++) {
      if (targetNode) {
        console.log(targetNode.value);
        targetNode = targetNode.nextValue;
      }
    }
  }
}
