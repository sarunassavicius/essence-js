import { EssenceCore } from "./EssenceCore"

export { Essence }

export function Create(): EssenceCore {
    let e = (<any> Object).assign(function (selector?: string) {
        if (selector != null) {
            return EssenceCore.findFirst(selector);
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