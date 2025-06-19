import {assertEquals} from "jsr:@std/assert";
import {
  makeActionsBlock,
  makeContextBlock,
  makeDividerBlock,
  makeFileBlock,
  makeHeaderBlock,
  makeImageBlock,
  makeInputBlock,
  makeMarkdownBlock,
  makeRichTextBlock,
  makeSectionBlock,
  makeVideoBlock,
} from "./block_makers.ts";
import {
  makeButtonElement,
  makePlainTextInputElement,
} from "elementMakers/element_makers.ts";
import {
  IActionsBlock,
  IContextBlock,
  IDividerBlock,
  IFileBlock,
  IHeaderBlock,
  IImageBlock,
  IInputBlock,
  IMarkdownBlock,
  IRichTextBlock,
  ISectionBlock,
  IVideoBlock,
} from "customTypes/custom_types.ts";
import { makePlainTextObject } from "objectMakers/object_makers.ts";
import {
  makeRichTextSection,
  makeRichTextText,
} from "richTextMakers/rich_text_makers.ts";

Deno.test("makeActionsBlock makes an Actions Block", () => {
  const result = makeActionsBlock([makeButtonElement("text", "id")], "id");
  const expected: IActionsBlock = {
    type: "actions",
    block_id: "id",
    elements: [makeButtonElement("text", "id")],
  };

  assertEquals(result, expected);
});

Deno.test("makeContextBlock makes a Context Block", () => {
  const result = makeContextBlock([makePlainTextObject("text")], "id");
  const expected: IContextBlock = {
    type: "context",
    block_id: "id",
    elements: [makePlainTextObject("text")],
  };

  assertEquals(result, expected);
});

Deno.test("makeDividerBlock makes a Divider Block", () => {
  const result = makeDividerBlock("id");
  const expected: IDividerBlock = {
    type: "divider",
    block_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeFileBlock makes a File Block", () => {
  const result = makeFileBlock("exid", "source", "id");
  const expected: IFileBlock = {
    type: "file",
    block_id: "id",
    external_id: "exid",
    source: "source",
  };

  assertEquals(result, expected);
});

Deno.test("makeHeaderBlock makes a Header Block", () => {
  const result = makeHeaderBlock("text", "id");
  const expected: IHeaderBlock = {
    type: "header",
    block_id: "id",
    text: {
      type: "plain_text",
      text: "text",
    },
  };

  assertEquals(result, expected);
});

Deno.test("makeImageBlock makes an Image Block", () => {
  const result = makeImageBlock("alt", "id");
  const expected: IImageBlock = {
    type: "image",
    alt_text: "alt",
    block_id: "id"
  };

  assertEquals(result, expected);
});

Deno.test("makeInputBlock makes an Input Block", () => {
  const result = makeInputBlock(
    "label",
    makePlainTextInputElement("id"),
    "id",
    false,
  );
  const expected: IInputBlock = {
    type: "input",
    block_id: "id",
    label: {
      type: "plain_text",
      text: "label",
    },
    element: makePlainTextInputElement("id"),
    optional: false,
  };

  assertEquals(result, expected);
});

Deno.test("makeMarkdownBlock makes a Markdown Block", () => {
  const result = makeMarkdownBlock("text", "id");
  const expected: IMarkdownBlock = {
    type: "markdown",
    block_id: "id",
    text: "text",
  };

  assertEquals(result, expected);
});

Deno.test("makeRichTextBlock makes a Rich Text Block", () => {
  const result = makeRichTextBlock([
    makeRichTextSection([makeRichTextText("text")]),
  ],
  "id");
  const expected: IRichTextBlock = {
    type: "rich_text",
    block_id: "id",
    elements: [makeRichTextSection([makeRichTextText("text")])],
  };

  assertEquals(result, expected);
});

Deno.test("makeSectionBlock makes a Section Block", () => {
  const result1 = makeSectionBlock("id", "text", "mrkdwn");
  const expected1: ISectionBlock = {
    type: "section",
    block_id: "id",
    text: {
      type: "mrkdwn",
      text: "text",
    },
  };

  assertEquals(result1, expected1);

  const result2 = makeSectionBlock("id", "text", "plain_text");
  const expected2: ISectionBlock = {
    type: "section",
    block_id: "id",
    text: {
      type: "plain_text",
      text: "text",
    },
  };

  assertEquals(result2, expected2);

  const result3 = makeSectionBlock("id", undefined, undefined, [
    makePlainTextObject("text"),
  ], makeButtonElement("text", "id"));
  const expected3: ISectionBlock = {
    type: "section",
    block_id: "id",
    fields: [makePlainTextObject("text")],
    accessory: makeButtonElement("text", "id"),
  };

  assertEquals(result3, expected3);
});

Deno.test("makeVideoBlock makes a Video Block", () => {
  const result = makeVideoBlock("alt", "author", "id");
  const expected: IVideoBlock = {
    type: "video",
    alt_text: "alt",
    author_name: "author",
    block_id: "id"
  };

  assertEquals(result, expected);
})