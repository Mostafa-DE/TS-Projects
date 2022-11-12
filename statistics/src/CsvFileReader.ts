import fs from "fs";

export class CsvReader<T> {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    const data = fs.readFileSync(this.filename, {
      encoding: "utf-8",
    });

    this.data = data.split("\n").map(function getItemsMatch(item): string[] {
      return item.split(",");
    });
  }
}
