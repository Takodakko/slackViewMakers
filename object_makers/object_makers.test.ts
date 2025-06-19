import {assertEquals} from "jsr:@std/assert";
import {
  makeConfirmObject,
  makeConversationFilterObject,
  makeDispatchConfigObject,
  makeMrkdwnTextObject,
  makeOptionGroupsArray,
  makeOptionObjectsArrayDiffVals,
  makeOptionObjectsArraySimple,
  makePlainTextObject,
  makeSingleOptionGroup,
  makeSingleOptionObject,
} from "./object_makers.ts";
import type {
  IConfirmObject,
  IConversationFilterObject,
  IDispatchActionConfigObject,
  IMrkdwnTextObject,
  IOptionGroupObject,
  IOptionObject,
  IPlainTextObject,
} from "customTypes/custom_types.ts";

Deno.test("makePlainTextObject makes a Plain Text Object", () => {
  const result = makePlainTextObject("text");
  const expected: IPlainTextObject = {
    type: "plain_text",
    text: "text",
  };

  assertEquals(result, expected);
});

Deno.test("makeMrkdwnTextObject makes a Mrkdwn Text Object", () => {
  const result = makeMrkdwnTextObject("text");
  const expected: IMrkdwnTextObject = {
    type: "mrkdwn",
    text: "text",
  };

  assertEquals(result, expected);
});

Deno.test("makeSingleOptionObject makes one option object using a value and text", () => {
  const result = makeSingleOptionObject("text", "value");
  const expected: IOptionObject = {
    text: {
      type: "plain_text",
      text: "text",
    },
    value: "value",
  };

  assertEquals(result, expected);
});

Deno.test("makeOptionObjectsArraySimple makes a set of option objects where value and text are the same", () => {
  const result = makeOptionObjectsArraySimple(["1", "2"]);
  const expected: IOptionObject[] = [
    {
      text: {
        type: "plain_text",
        text: "1",
      },
      value: "1",
    },
    {
      text: {
        type: "plain_text",
        text: "2",
      },
      value: "2",
    },
  ];

  assertEquals(result, expected);
});

Deno.test("makeOptionObjectsArrayDiffVals makes a set of option objects with different values and texts", () => {
  const result = makeOptionObjectsArrayDiffVals([["One", "1"], ["Two", "2"]]);
  const expected: IOptionObject[] = [
    {
      text: {
        type: "plain_text",
        text: "One",
      },
      value: "1",
    },
    {
      text: {
        type: "plain_text",
        text: "Two",
      },
      value: "2",
    },
  ];

  assertEquals(result, expected);
});

Deno.test("makeSingleOptionGroup makes a single Option Group", () => {
  const result = makeSingleOptionGroup("label", [{
    text: { type: "plain_text", text: "text" },
    value: "val",
  }]);
  const expected: IOptionGroupObject = {
    label: {
      type: "plain_text",
      text: "label",
    },
    options: [{ text: { type: "plain_text", text: "text" }, value: "val" }],
  };

  assertEquals(result, expected);
});

Deno.test("makeOptionGroupsArray makes a set of option groups", () => {
  const result = makeOptionGroupsArray([[
    "label1",
    makeOptionObjectsArraySimple(["1", "2"]),
  ], ["label2", makeOptionObjectsArraySimple(["3"])]]);
  const expected: IOptionGroupObject[] = [
    {
      label: {
        type: "plain_text",
        text: "label1",
      },
      options: makeOptionObjectsArraySimple(["1", "2"]),
    },
    {
      label: {
        type: "plain_text",
        text: "label2",
      },
      options: makeOptionObjectsArraySimple(["3"]),
    },
  ];

  assertEquals(result, expected);
});

Deno.test("makeConfirmObject makes a Confirm Object", () => {
  const result = makeConfirmObject(
    "title",
    "text",
    "confirm",
    "deny",
    "primary",
  );
  const expected: IConfirmObject = {
    title: {
      type: "plain_text",
      text: "title",
    },
    text: {
      type: "plain_text",
      text: "text",
    },
    confirm: {
      type: "plain_text",
      text: "confirm",
    },
    deny: {
      type: "plain_text",
      text: "deny",
    },
    style: "primary",
  };

  assertEquals(result, expected);
});

Deno.test("makeConversationFilterObject makes a Conversation Filter Object", () => {
  const result = makeConversationFilterObject(["channel"], true);
  const expected: IConversationFilterObject = {
    include: ["channel"],
    exclude_external_shared_channels: true
  };

  assertEquals(result, expected);
})

Deno.test("makeDispatchConfigObject makes a Confirm Object", () => {
  const result = makeDispatchConfigObject(["on_character_entered"]);
  const expected: IDispatchActionConfigObject = {
    trigger_actions_on: ["on_character_entered"],
  };

  assertEquals(result, expected);
});
