import { faker } from "@faker-js/faker";
import { IMap } from "./types";

export class User implements IMap {
  name: string;
  location: IMap["location"];

  constructor() {
    this.name = faker.name.fullName();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }

  getMarkerContent(): string {
    return `<b>User Name:</b> ${this.name}`;
  }
}
