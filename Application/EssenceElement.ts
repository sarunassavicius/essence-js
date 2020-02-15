import { EssenceCore } from "./EssenceCore"

export class EssenceElement {
    private element: Element;
    private selector: string;

    constructor(selector: string, element: Element = null) {
        this.selector = selector;
        this.element = element;

        if (element === null) {
            let e = EssenceCore.findFirst(selector);
            if (e === null) {
                throw new Error("No elements found with selector: " + selector);
            }

            this.element = e.getElement();
        }
    }

    public getElement(): Element {
        return this.element;
    }

    public getSelector(): string {
        return this.selector;
    }

    public getAttribute(attribute: string): string {
        return this.element.getAttribute(attribute);
    }

    public setAttribute(attribute: string, value: string): void {
        return this.element.setAttribute(attribute, value);
    }

    public getValue(): string {
        if (this.element instanceof HTMLInputElement || this.element instanceof HTMLTextAreaElement) {
            return this.element.value;
        }

        throw new Error("Element is not an input element");
    }

    public setValue(value: string): void {
        if (this.element instanceof HTMLInputElement || this.element instanceof HTMLTextAreaElement) {
            this.element.value = value;
            return;
        }

        throw new Error("Element is not an input element");
    }

    public async fadeIn(): Promise<any> {
        return new Promise((resolve) => {
            let element: HTMLElement = this.element as HTMLElement;

            if (element.style.opacity === "") {
                element.style.opacity = "0";
            }

            if (element.style.opacity !== "1") {
                //element.style.display = "block";
                let timer = setInterval(function () {
                    element.style.opacity = String(+element.style.opacity + .10);
                    if (+getComputedStyle(element).getPropertyValue("opacity") >= 1) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 25)
            }
        });
    }

    public fadeOut(): Promise<any> {
        return new Promise((resolve) => {
            let element: HTMLElement = this.element as HTMLElement;

            if (element.style.opacity === "") {
                element.style.opacity = "1";
            }

            if (element.style.opacity !== "0") {
                let timer = setInterval(function () {
                    element.style.opacity = String(+element.style.opacity - .10);
                    if (+getComputedStyle(element).getPropertyValue("opacity") <= 0) {
                        element.style.display = "none";
                        clearInterval(timer);
                        resolve();
                    }
                }, 25)
            }
        });
    }

    public hasClass(className: string): boolean {
        return EssenceCore.hasClass(this.element, className);
    }

    public slideTo(height: number, time: number = 500): Promise<any> {
        let element: HTMLElement = this.element as HTMLElement;
        let toggled = false;
        let minheight = 0;
        let maxheight = height;

        return new Promise((resolve) => {
            element.style.height = element.offsetHeight + "px";

            let instanceheight = parseInt(element.style.height);
            let init = (new Date()).getTime();
            let h = (toggled = !toggled) ? maxheight: minheight;

            let disp = h - parseInt(element.style.height);
            let timer = setInterval(function () {
                let instance = (new Date()).getTime() - init;

                if (instance <= time ) {
                    let pos = instanceheight + Math.floor(disp * instance / time);
                    element.style.height =  pos + "px";
                } else {
                    element.style.height = h + "px";
                    clearInterval(timer);
                    resolve();
                }
            }, 1);
        });
    }

    public findFirstChild(selector: string): EssenceElement {
        return EssenceCore.findFirst(selector, this.element);
    }

    public findChildren(selector: string): Array<EssenceElement> {
        return EssenceCore.find(selector, this.element);
    }
}