import {View} from "./View";
import {User} from "../models/User";

export class UserShow extends View<User> {
    template(): string {
        return `
             <div style="color: #fafafa">
                <h1>User Detail</h1>
                <div>User name: ${this.model.get("name")}</div>
                <div>User age: ${this.model.get("age")}</div>
             </div>
        `;
    }
}
