import {IUserProps} from "../../types";
import {Model} from "./Model";
import {Attributes} from "./Attributes";
import {HttpRequests} from "./HttpRequests";
import {API_URL} from "../../config";
import {Eventing} from "./Eventing";
import {Collection} from "./Collection";

export class User extends Model<IUserProps> {
    static buildUser(attrs: IUserProps): User {
        return new User(
            new Attributes<IUserProps>(attrs),
            new Eventing(),
            new HttpRequests<IUserProps>(API_URL)
        )
    }

    static buildUserCollection(): Collection<User, IUserProps> {
        return new Collection<User, IUserProps>(
            (json: IUserProps) => User.buildUser(json),
        );
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({age});
    }
}
