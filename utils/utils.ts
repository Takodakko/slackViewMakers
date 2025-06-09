import { makePlainTextObject } from "objectMakers/object_makers.ts";

/** Removes all properties with value undefined */
export function removeUnneededKeys<t>(obj: t) {
    let key: keyof typeof obj;
    for (key in obj) {
        if(obj[key] === undefined) {
            delete obj[key];
        }
    }
}

/** Makes a placeholder object (a plain text object) or returns undefined. Used in elements, mostly for placeholder property */
export const textObjectOrUndefined = (text?: string) => {
    if (text) {
        return makePlainTextObject(text);
    } else {
        return undefined;
    }
}