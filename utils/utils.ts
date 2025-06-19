import { makePlainTextObject } from "objectMakers/object_makers.ts";
import type { IPlainTextObject } from "customTypes/custom_types.ts";

/** Removes all properties with value undefined */
export function removeUnneededKeys<t>(obj: t): void {
  let key: keyof typeof obj;
  for (key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }
}

/** Makes a placeholder object (a plain text object) or returns undefined. Used in elements, mostly for placeholder property */
export const textObjectOrUndefined = (text?: string): IPlainTextObject | undefined => {
  if (text) {
    return makePlainTextObject(text);
  } else {
    return undefined;
  }
};
