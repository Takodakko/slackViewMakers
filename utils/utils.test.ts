import { IPlainTextObject } from "customTypes/custom_types.ts";
import { removeUnneededKeys, textObjectOrUndefined } from "./utils.ts";
import { assertEquals } from "std/assert/mod.ts";

Deno.test("removeUnneededKeys removes properties with value undefined from objects", () => {
  const result = { a: 1, b: undefined };
  removeUnneededKeys(result);
  const expected = { a: 1 };

  assertEquals(result, expected);
});

Deno.test("textObjectOrUndefined makes a text object if given a string, otherwise, it returns undefined", () => {
  const result1 = textObjectOrUndefined("string");
  const result2 = textObjectOrUndefined();

  const expected1: IPlainTextObject = { type: "plain_text", text: "string" };
  const expected2 = undefined;

  assertEquals(result1, expected1);
  assertEquals(result2, expected2);
});
