import { assertEquals } from "std/assert/assert_equals.ts";
import {
  makeRichTextBroadcast,
  makeRichTextChannel,
  makeRichTextColor,
  makeRichTextDate,
  makeRichTextEmoji,
} from "./rich_text_makers.ts";
import {
  IRichTextElementBroadcast,
  IRichTextElementChannel,
  IRichTextElementColor,
  IRichTextElementDate,
  IRichTextElementEmoji,
} from "customTypes/custom_types.ts";

Deno.test("makeRichTextBroadcast makes a broadcast type", () => {
  const result = makeRichTextBroadcast("here");
  const expected: IRichTextElementBroadcast = {
    type: "broadcast",
    range: "here",
  };

  assertEquals(result, expected);
});

Deno.test("makeRichTextChannel makes a channel type", () => {
  const result = makeRichTextChannel("id", "bold");
  const expected: IRichTextElementChannel = {
    type: "channel",
    channel_id: "id",
    style: "bold",
  };

  assertEquals(result, expected);
});

Deno.test("makeRichTextColor makes a color type", () => {
  const result = makeRichTextColor("val");
  const expected: IRichTextElementColor = {
    type: "color",
    value: "val",
  };

  assertEquals(result, expected);
});

Deno.test("makeRichTextDate makes a date type", () => {
  const result = makeRichTextDate(12345, "format", "url", "fallback");
  const expected: IRichTextElementDate = {
    type: "date",
    timestamp: 12345,
    format: "format",
    url: "url",
    fallback: "fallback",
  };

  assertEquals(result, expected);
});

Deno.test("makeRichTextEmoji makes an emoji type", () => {
  const result = makeRichTextEmoji("name", "uni");
  const expected: IRichTextElementEmoji = {
    type: "emoji",
    name: "name",
    unicode: "uni",
  };

  assertEquals(result, expected);
});
