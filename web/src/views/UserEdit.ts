import {View} from "./View";
import {User} from "../models/User";
import {UserShow} from "./UserShow";
import {UserForm} from "./userForm";

export class UserEdit extends View<User> {
    regionsMap(): Record<string, string> {
        return {
            userShow: ".user-show",
            userForm: ".user-form"
        };
    }

    onRender(): void {
        new UserShow(this.regions.userShow, this.model).render();
        new UserForm(this.regions.userForm, this.model).render();
    }
    template(): string {
        return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div> 
        `;
    }
}
