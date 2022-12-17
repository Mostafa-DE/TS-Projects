import {Eventing} from "./Eventing";
import axios from "axios";
import {API_URL} from "../../config";

export class Collection<T, R> {
    models: T[] = [];
    events: Eventing = new Eventing();

    constructor(public deserialize: (json: R) => T) {
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(API_URL).then((response) => {
            response.data.forEach((value: R) => {
                this.models.push(this.deserialize(value));
            });
            this.trigger("change");
        });
    }
}
