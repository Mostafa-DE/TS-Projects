import { BubbleSort } from "./Sort";
import { NumbersCollection } from "./NumberCollection";
import { CharsCollection } from "./CharsCollections";

const numberCollection = new NumbersCollection([10, 3, -5, 0]);
const charsCollection = new CharsCollection("edcba");

const bubbleSortNumbers = new BubbleSort(numberCollection);
bubbleSortNumbers.sort();
console.log(numberCollection.data);

const bubbleSortChars = new BubbleSort(charsCollection);
bubbleSortChars.sort();
console.log(charsCollection.data);
