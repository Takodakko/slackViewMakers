import { assertEquals } from "std/assert/assert_equals.ts";
import {
  makeActionsBlock,
  makeContextBlock,
  makeDividerBlock,
  makeFileBlock,
  makeHeaderBlock,
  makeInputBlock,
  makeMarkdownBlock,
  makeRichTextBlock,
  makeSectionBlock,
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
  IInputBlock,
  IMarkdownBlock,
  IRichTextBlock,
  ISectionBlock,
} from "customTypes/custom_types.ts";
import { makePlainTextObject } from "objectMakers/object_makers.ts";
import {
  makeRichTextSection,
  makeRichTextText,
} from "richTextMakers/rich_text_makers.ts";

Deno.test("makeActionsBlock makes an Actions Block", () => {
  const result = makeActionsBlock("id", [makeButtonElement("text", "id")]);
  const expected: IActionsBlock = {
    type: "actions",
    block_id: "id",
    elements: [makeButtonElement("text", "id")],
  };

  assertEquals(result, expected);
});

Deno.test("makeContextBlock makes a Context Block", () => {
  const result = makeContextBlock("id", [makePlainTextObject("text")]);
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
  const result = makeFileBlock("id", "exid", "source");
  const expected: IFileBlock = {
    type: "file",
    block_id: "id",
    external_id: "exid",
    source: "source",
  };

  assertEquals(result, expected);
});

Deno.test("makeHeaderBlock makes a Header Block", () => {
  const result = makeHeaderBlock("id", "text");
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

Deno.test("makeInputBlock makes an Input Block", () => {
  const result = makeInputBlock(
    "id",
    "label",
    makePlainTextInputElement("id"),
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
  const result = makeMarkdownBlock("id", "text");
  const expected: IMarkdownBlock = {
    type: "markdown",
    block_id: "id",
    text: "text",
  };

  assertEquals(result, expected);
});

Deno.test("makeRichTextBlock makes a Rich Text Block", () => {
  const result = makeRichTextBlock("id", [
    makeRichTextSection([makeRichTextText("text")]),
  ]);
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

Deno.test("makeSectionBlock throws errors if textType isn't supplied with text, or if both text and fields are undefined", () => {
  let result1: Error = new Error("");
  try {
    makeSectionBlock("id");
  } catch (e) {
    if (e instanceof Error) {
      result1 = e;
    }
  }

  assertEquals(result1, new Error("Need to provide text or fields"));

  let result2: Error = new Error("");
  try {
    makeSectionBlock("id", "text");
  } catch (e) {
    if (e instanceof Error) {
      result2 = e;
    }
  }

  assertEquals(result2, new Error("Must provide text type when using text"));
});
