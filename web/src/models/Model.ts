import {AxiosPromise, AxiosResponse} from "axios";
import {HasId} from "../../types";

interface ModelAttributes<T> {
    get<K extends keyof T>(key: K): T[K];

    set(propsUpdate: T): void;

    getAll(): T;
}

interface HttpRequests<T> {
    fetch(id: number): AxiosPromise;

    save(data: T): AxiosPromise;
}

interface Eventing {
    on(eventName: string, callback: () => void): void;

    trigger(eventName: string): void;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Eventing,
        private request: HttpRequests<T>
    ) {
    }

    get on() {
        return this.events.on.bind(this.events);
    }

    get trigger() {
        return this.events.trigger.bind(this.events);
    }

    get get() {
        return this.attributes.get.bind(this.attributes);
    }

    get getAll() {
        return this.attributes.getAll.bind(this.attributes);
    }

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger("change");
    }

    fetch(): void {
        const id = this.get("id");
        if (typeof id !== "number") throw new Error("Cannot fetch without an id");
        this.request
            .fetch(id)
            .then((res: AxiosResponse): void => this.set(res.data));
    }

    save(): void {
        this.request
            .save(this.attributes.getAll())
            .then((): void => this.trigger("save"))
            .catch((): void => this.trigger("error"));
    }
}
