import {View} from "./View";
import {User} from "../models/User";

export class UserForm extends View<User> {
    eventsMap(): Record<string, () => void> {
        return {
            "click:.set-age": this.handleClickSetAge,
            "click:.change-name": this.handleClickChangeName,
            "click:.save-model": this.handleClickSaveModel
        };
    }

    handleClickSaveModel = (): void => {
        this.model.save();
    }

    handleClickChangeName = (): void => {
        const input = <HTMLInputElement>this.parent.querySelector("input");
        const name = input.value;
        this.model.set({name});
    };

    handleClickSetAge = (): void => {
        this.model.setRandomAge();
    };

    template(): string {
        return `
             <div style="color: #fafafa">
                <input placeholder="${this.model.get("name")}"/>
                <button class="set-age">Set random age</button>
                <button class="change-name">Change Name</button>
                <button class="save-model">Save User</button>
             </div>
        `;
    }
}
