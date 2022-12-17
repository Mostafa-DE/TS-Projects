interface IAttributes {
  name?: string;
  age?: number;
  id?: number;
}

export class Attributes<T extends IAttributes> {
  constructor(private data: T) {}

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(propsUpdate: T): void {
    Object.assign(this.data, propsUpdate);
  }

  getAll(): T {
    return this.data;
  }
}
