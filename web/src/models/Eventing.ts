export class Eventing {
  events: { [key: string]: Array<() => void> } = {};

  on(eventName: string, callback: () => void): void {
    const handlers = this.events[eventName] ?? [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length == 0) return;

    handlers.forEach((callback) => {
      callback();
    });
  }
}
