import {User} from "../models/User";

export class UserForm {
    constructor(public parent: Element, public model: User) {
        this.model.on('change', () => {
            this.render();
        });
    }

    eventsMap(): Record<string, () => void> {
        return {
            'click:.set-age': this.handleClickSetAge,
            'click:.change-name': this.handleClickChangeName,
        }
    }

    handleClickChangeName = (): void => {
        const input = <HTMLInputElement>this.parent.querySelector('input');
        const name = input.value;
        this.model.set({name});
    }

    handleClickSetAge = (): void => {
        this.model.setRandomAge();
    }

    template(): string {
        return `
             <div style="color: #fafafa">
                <h1>User Form</h1>
                <div>User Name: ${this.model.get('name')}</div>
                <div>User Age: ${this.model.get('age')}</div>
                <input />
                <button class="set-age">Set random age</button>
                <button class="change-name">Change Name</button>
             </div>
        `;
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, htmlSelector] = eventKey.split(':');

            fragment.querySelectorAll(htmlSelector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    render(): void {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }
}
