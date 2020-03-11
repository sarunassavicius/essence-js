import { EssenceCore } from "./EssenceCore"
import { EssenceElement } from "./EssenceElement";

export { Essence }

export function Create(): EssenceCore {
    let e = (<any> Object).assign(function (selector?: any) {
        if (selector != null) {
            return new EssenceElement(selector);
        }
    }, {});

    e.findFirst = EssenceCore.findFirst;
    e.find = EssenceCore.find;
    e.post = EssenceCore.post;
    e.get = EssenceCore.get;
    e.request = EssenceCore.get;
    e.hasClass = EssenceCore.hasClass;

    return e;
}

const Essence: EssenceCore = Create();

declare global {
    interface Window { Essence: EssenceCore; }
}

window.Essence = window.Essence || Essence;