import {assertEquals} from "jsr:@std/assert";
import {
  makeRichTextBroadcast,
  makeRichTextChannel,
  makeRichTextColor,
  makeRichTextDate,
  makeRichTextEmoji,
  makeRichTextLink,
  makeRichTextList,
  makeRichTextText,
  makeRichTextUser,
  makeRichTextUsergroup,
} from "./rich_text_makers.ts";
import type {
  IRichTextElementBroadcast,
  IRichTextElementChannel,
  IRichTextElementColor,
  IRichTextElementDate,
  IRichTextElementEmoji,
  IRichTextElementLink,
  IRichTextElementText,
  IRichTextElementUser,
  IRichTextElementUsergroup,
  IRichTextList,
  IRichTextSection,
} from "customTypes/custom_types.ts";
import { makeRichTextSection } from "./rich_text_makers.ts";

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

Deno.test("makeRichTextLink makes a link type", () => {
  const result1 = makeRichTextLink("url", "text");
  const expected1: IRichTextElementLink = {
    type: "link",
    url: "url",
    text: "text",
  };

  const result2 = makeRichTextLink("url", "text", false, { bold: true });
  const expected2: IRichTextElementLink = {
    type: "link",
    url: "url",
    text: "text",
    unsafe: false,
    style: { bold: true },
  };

  assertEquals(result1, expected1);
  assertEquals(result2, expected2);
});

Deno.test("makeRichTextList makes a list type", () => {
  const richText = [makeRichTextSection([makeRichTextColor("val")])];
  const result = makeRichTextList("bullet", richText);
  const expected: IRichTextList = {
    style: "bullet",
    type: "rich_text_list",
    elements: richText,
  };

  assertEquals(result, expected);
});

Deno.test("makeRichTextSection makes a Rich Text section", () => {
  const result = makeRichTextSection([makeRichTextColor("val")]);
  const expected: IRichTextSection = {
    type: "rich_text_section",
    elements: [makeRichTextColor("val")],
  };

  assertEquals(result, expected);
});

Deno.test("makeRichTextText makes a text type", () => {
  const result = makeRichTextText("text", { bold: true });
  const expected: IRichTextElementText = {
    type: "text",
    text: "text",
    style: { bold: true },
  };

  assertEquals(result, expected);
});

Deno.test("makeRichTextUser makes a user type", () => {
  const result1 = makeRichTextUser("id");
  const expected1: IRichTextElementUser = {
    type: "user",
    user_id: "id",
  };

  const result2 = makeRichTextUser("id", { italic: true });
  const expected2: IRichTextElementUser = {
    type: "user",
    user_id: "id",
    style: { italic: true },
  };

  assertEquals(result1, expected1);
  assertEquals(result2, expected2);
});

Deno.test("makeRichTextUsergroup makes a usergroup type", () => {
  const result1 = makeRichTextUsergroup("id");
  const expected1: IRichTextElementUsergroup = {
    type: "usergroup",
    usergroup_id: "id",
  };

  const result2 = makeRichTextUsergroup("id", { strike: true });
  const expected2: IRichTextElementUsergroup = {
    type: "usergroup",
    usergroup_id: "id",
    style: { strike: true },
  };

  assertEquals(result1, expected1);
  assertEquals(result2, expected2);
});
