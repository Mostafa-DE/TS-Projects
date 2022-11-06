import { BubbleSort } from "./Sort";
import { NumbersCollection } from "./NumberCollection";
import { CharsCollection } from "./CharsCollections";
import { SinglyLinkedList } from "./LinkedList";

const numberCollection = new NumbersCollection([10, 3, -5, 0]);
const charsCollection = new CharsCollection("edcba");
const singlyLinkedList = new SinglyLinkedList();

// Sort Numbers
numberCollection.sort();
console.log(numberCollection.data);

// Sort Characters
charsCollection.sort();
console.log(charsCollection.data);

// Sort Linked List
singlyLinkedList.push(4);
singlyLinkedList.push(10);
singlyLinkedList.push(2);
singlyLinkedList.push(200);
singlyLinkedList.push(60);
singlyLinkedList.sort();
singlyLinkedList.print();
