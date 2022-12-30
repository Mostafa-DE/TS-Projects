interface IModel {
    on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends IModel> {
    regions: Record<string, Element> = {};

    regionsMap(): Record<string, string> {
        return {};
    }

    constructor(public parent: Element, public model: T) {
        this.model.on('change', () => {
            this.render();
        });
    }

    eventsMap(): Record<string, () => void> {
        return {};
    };

    abstract template(): string;

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, htmlSelector] = eventKey.split(':');

            fragment.querySelectorAll(htmlSelector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    mapRegions(fragment: DocumentFragment): void {
        const regionsMap = this.regionsMap();

        for (let key in regionsMap) {
            const htmlSelector = regionsMap[key];
            const element = fragment.querySelector(htmlSelector);
            if (element) {
                this.regions[key] = element;
            }
        }
    }

    onRender(): void {}

    render(): void {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        this.onRender();

        this.parent.append(templateElement.content);
    }
}
