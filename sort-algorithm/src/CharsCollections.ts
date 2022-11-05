export class CharsCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(left: number, right: number): boolean {
    return this.data[left].toLowerCase() > this.data[right].toLowerCase();
  }

  swap(left: number, right: number): void {
    const charsArr = [...this.data];
    [charsArr[left], charsArr[right]] = [charsArr[right], charsArr[left]];
    this.data = charsArr.join("");
  }
}
