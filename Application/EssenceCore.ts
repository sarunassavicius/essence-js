import { EssenceElement } from "./EssenceElement";
import { EssenceResponse } from "./EssenceResponse";

export class EssenceCore {
    public static find(selector: string): Array<EssenceElement> {
        let elements = [];
        let nodes = document.querySelectorAll(selector);

        nodes.forEach((val: Element, key: number) => {
            elements.push(new EssenceElement(selector, val));
        });

        return elements;
    }

    public static findFirst(selector: string): EssenceElement {
        let nodes = document.querySelectorAll(selector);

        if (nodes.length === 0) {
            return null;
        }

        return new EssenceElement(selector, nodes[0]);
    }

    public static request<T>(url: string, method: string, data: object): Promise<EssenceResponse<T>> {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open(method, url, true);
            request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
            request.setRequestHeader('Access-Control-Allow-Origin', '*');

            let response = new EssenceResponse<T>();

            request.onload = (e: ProgressEvent) => {
                response.response = request.responseText;
                response.status = request.status;

                if (request.status >= 200 && request.status < 400) {
                    if (request.response !== "") {
                        let result: T = JSON.parse(request.response);
                        response.success = true;
                        response.data = result;
                    }
                    resolve(response);
                } else {
                    response.success = false;
                    reject(response);
                }
            };

            request.onerror = (e: ProgressEvent) => {
                response.response = request.responseText;
                response.status = request.status;
                response.success = false;
                reject(response);
            };

            request.send(JSON.stringify(data));
        });
    }

    public static post<T>(url: string, data?: object): Promise<EssenceResponse<T>> {
        return EssenceCore.request<T>(url, "POST", data);
    }

    public static get<T>(url: string, data?: object): Promise<EssenceResponse<T>> {
        return EssenceCore.request<T>(url, "GET", data);
    }

    public static hasClass(element: Element, className: string): boolean {
        return ((" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + className + " ") > -1)
    }
}