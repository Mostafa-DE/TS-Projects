import { faker } from "@faker-js/faker";
import { IMap } from "./types";

export class Company implements IMap {
  name: string;
  catchPhrase = faker.company.catchPhrase();
  location: IMap["location"];
  constructor() {
    this.name = faker.company.name();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }

  getMarkerContent(): string {
    return `
    <div>
      <b>Company Name:</b> ${this.name}<br>
      <b>Catch Phrase:</b> ${this.catchPhrase}
    </div>
    `;
  }
}
