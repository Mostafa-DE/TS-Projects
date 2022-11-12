import { OutputTarget } from "./types";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
