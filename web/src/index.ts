import {User} from "./models/User";
import {UserEdit} from "./views/UserEdit";
import {UserList} from "./views/UserList";
import {Collection} from "./models/Collection";
import {IUserProps} from "../types";

const root = document.getElementById('root');
const users = new Collection((json: IUserProps) => User.buildUser(json));

if (root) {
    users.on('change', () => {
        new UserList(root, users).render();
    })
    users.fetch();
    // const userEdit = new UserEdit(root, User.buildUser({name: 'Name', age: 20}));
    // userEdit.render();
} else {
    throw new Error('Root element not found');
}



