import {User} from "../models/User";
import {CollectionView} from "./CollectionView";
import {IUserProps} from "../../types";
import {UserShow} from "./UserShow";

export class UserList extends CollectionView<User, IUserProps> {
    renderItem(model: User, itemParent: Element): void {
        new UserShow(itemParent, model).render();
    }

    // template(): string {
    //     return `
    //         <div>
    //             <h1>User List</h1>
    //             <div class="user-list"></div>
    //         </div>
    //     `;
    // }
}
