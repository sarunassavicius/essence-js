export interface EssenceElement {
    getElement(): Element;
    getSelector(): string;
    getAttribute(attribute: string): string;
    setAttribute(attribute: string, value: string): void;
    getValue(): string;
    setValue(value: string): void;
    hasClass(className: string): boolean;
    fadeIn(): Promise<any>;
    fadeOut(): Promise<any>;
    slideTo(height: number, time: number): Promise<any>;
    findFirstChild(selector: string): EssenceElement;
    findChildren(selector: string): EssenceElement;
}

export interface EssenceResponse<T> {
    success: boolean;
    status: number;
    response: string;
    data: T;
}

export interface EssenceCore {
    find(selector: string, root?: Element): Array<EssenceElement>;
    findFirst(selector: string, root?: Element): EssenceElement;
    post<T>(url: string, data?: object): Promise<EssenceResponse<T>>;
    get<T>(url: string, data?: object): Promise<EssenceResponse<T>>;
    request<T>(url: string, method: string, data: object): Promise<EssenceResponse<T>>;
    hasClass(element: Element, className: string): boolean;
}

interface Essence {
    (selector?: any): EssenceElement;
    find(selector: string): Array<EssenceElement>;
    findFirst(selector: string): EssenceElement;
    post<T>(url: string, data?: object): Promise<EssenceResponse<T>>;
    get<T>(url: string, data?: object): Promise<EssenceResponse<T>>;
    request<T>(url: string, method: string, data: object): Promise<EssenceResponse<T>>;
    hasClass(element: Element, className: string): boolean;
}

export const Essence: Essence;