import {UserForm} from "./views/userForm";
import {User} from "./models/User";

const root = document.getElementById('root');

if (root) {
    const userForm = new UserForm(root, User.buildUser({id: 1, name: 'Name', age: 20}));
    userForm.render();
} else {
    throw new Error('Root element not found');
}



