import {assertEquals} from "jsr:@std/assert";
import {
  makeButtonElement,
  makeChannelsSelectElement,
  makeCheckboxesElement,
  makeConversationsSelectElement,
  makeDatePickerElement,
  makeDateTimePickerElement,
  makeEmailInputElement,
  makeExternalSelectElement,
  makeFileInputElement,
  makeImageElement,
  makeMultiChannelSelectElement,
  makeMultiConversationsSelectElement,
  makeMultiExternalSelectElement,
  makeMultiStaticSelectElement,
  makeMultiUserSelectElement,
  makeNumberInputElement,
  makeOverflowElement,
  makePlainTextInputElement,
  makeRadioButtonsElement,
  makeRichTextInputElement,
  makeSingleStaticSelectElement,
  makeSingleUserSelectElement,
  makeTimePickerElement,
  makeURLInputElement,
  makeWorkflowButtonElement,
} from "./element_makers.ts";
import type {
  IButtonElement,
  IChannelsSelectElement,
  ICheckboxesElement,
  IConversationsSelectElement,
  IDatePickerElement,
  IDateTimePickerElement,
  IEmailTextInputElement,
  IExternalSelectElement,
  IFileInputElement,
  IImageElement,
  IMultiChannelsSelectElement,
  IMultiConversationsSelectElement,
  IMultiExternalSelectElement,
  IMultiStaticSelectElement,
  IMultiUsersSelectElement,
  INumberInputElement,
  IOverflowElement,
  IPlainTextInputElement,
  IRadioButtonsElement,
  IRichTextInputElement,
  IStaticSelectElement,
  ITimePickerElement,
  IURLTextInputElement,
  IUsersSelectElement,
  IWorkflowButtonElement,
} from "customTypes/custom_types.ts";
import {
  makeOptionGroupsArray,
  makeOptionObjectsArraySimple,
  makePlainTextObject,
} from "objectMakers/object_makers.ts";

Deno.test("makeButtonElement makes a Button Element", () => {
  const result = makeButtonElement("text", "id");
  const expected: IButtonElement = {
    type: "button",
    action_id: "id",
    text: makePlainTextObject("text"),
  };

  assertEquals(result, expected);
});

Deno.test("makeChannelsSelectElement makes a Channels Select Element", () => {
  const result = makeChannelsSelectElement("id", "placeholder");
  const expected: IChannelsSelectElement = {
    type: "channels_select",
    action_id: "id",
    placeholder: makePlainTextObject("placeholder"),
  };

  assertEquals(result, expected);
});

Deno.test("makeCheckboxesElement makes a Checkboxes Element", () => {
  const result = makeCheckboxesElement(
    makeOptionObjectsArraySimple(["1", "2"]),
    "id",
  );
  const expected: ICheckboxesElement = {
    type: "checkboxes",
    action_id: "id",
    options: makeOptionObjectsArraySimple(["1", "2"]),
  };

  assertEquals(result, expected);
});

Deno.test("makeConversationsSelectElement makes a Conversations Select Element", () => {
  const result = makeConversationsSelectElement("id");
  const expected: IConversationsSelectElement = {
    type: "conversations_select",
    action_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeDatePickerElement makes a Date Picker Element", () => {
  const result = makeDatePickerElement("id");
  const expected: IDatePickerElement = {
    type: "datepicker",
    action_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeDateTimePickerElement makes a Date Time Picker Element", () => {
  const result = makeDateTimePickerElement("id");
  const expected: IDateTimePickerElement = {
    type: "datetimepicker",
    action_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeEmailInputElement makes an Email Input Element", () => {
  const result = makeEmailInputElement("id");
  const expected: IEmailTextInputElement = {
    type: "email_text_input",
    action_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeExternalSelectElement makes an External Select Element", () => {
  const result = makeExternalSelectElement("id");
  const expected: IExternalSelectElement = {
    type: "external_select",
    action_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeFileInputElement makes a File Element", () => {
  const result = makeFileInputElement("id", ["docx"], 1);
  const expected: IFileInputElement = {
    type: "file_input",
    action_id: "id",
    filetypes: ["docx"],
    max_files: 1,
  };

  assertEquals(result, expected);
});

Deno.test("makeImageElement makes an Image Element", () => {
  const result = makeImageElement("alt", "url");
  const expected: IImageElement = {
    type: "image",
    alt_text: "alt",
    image_url: "url",
  };

  assertEquals(result, expected);
});

Deno.test("makeMultiChannelSelectElement makes a Channel Multi-Select Element", () => {
  const result = makeMultiChannelSelectElement("id");
  const expected: IMultiChannelsSelectElement = {
    type: "multi_channels_select",
    action_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeMultiConversationsSelectElement makes a Conversations Multi-Select Element", () => {
  const result = makeMultiConversationsSelectElement("id");
  const expected: IMultiConversationsSelectElement = {
    type: "multi_conversations_select",
    action_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeMultiExternalSelectElement makes an External Multi-Select Element", () => {
  const result = makeMultiExternalSelectElement("id");
  const expected: IMultiExternalSelectElement = {
    type: "multi_external_select",
    action_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeMultiStaticSelectElement makes a Static Multi-Select Element", () => {
  const result1 = makeMultiStaticSelectElement(
    makeOptionObjectsArraySimple(["1", "2"]),
    undefined,
    "id",
  );
  const expected1: IMultiStaticSelectElement = {
    type: "multi_static_select",
    action_id: "id",
    options: makeOptionObjectsArraySimple(["1", "2"]),
  };

  assertEquals(result1, expected1);

  const result2 = makeMultiStaticSelectElement(
    undefined,
    makeOptionGroupsArray([["1", makeOptionObjectsArraySimple(["1"])]]),
    "id",
  );
  const expected2: IMultiStaticSelectElement = {
    type: "multi_static_select",
    action_id: "id",
    option_groups: makeOptionGroupsArray([[
      "1",
      makeOptionObjectsArraySimple(["1"]),
    ]]),
  };

  assertEquals(result2, expected2);
});

Deno.test("makeMultiUserSelectElement makes a User Multi-Select Element", () => {
  const result = makeMultiUserSelectElement("id");
  const expected: IMultiUsersSelectElement = {
    type: "multi_users_select",
    action_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeNumberInputElement makes a Number Input Element", () => {
  const result = makeNumberInputElement(true, "id", undefined, "4.5");
  const expected: INumberInputElement = {
    type: "number_input",
    action_id: "id",
    initial_value: "4.5",
    is_decimal_allowed: true,
  };

  assertEquals(result, expected);
});

Deno.test("makeOverflowElement makes an Overflow Element", () => {
  const result = makeOverflowElement(makeOptionObjectsArraySimple(["1"]), "id");
  const expected: IOverflowElement = {
    type: "overflow",
    action_id: "id",
    options: makeOptionObjectsArraySimple(["1"]),
  };

  assertEquals(result, expected);
});

Deno.test("makePlainTextInputElement makes a Plain Text Input Element", () => {
  const result = makePlainTextInputElement("id", "placeholder");
  const expected: IPlainTextInputElement = {
    type: "plain_text_input",
    action_id: "id",
    placeholder: makePlainTextObject("placeholder"),
  };

  assertEquals(result, expected);
});

Deno.test("makeRadioButtonsElement makes a Radio Buttons Element", () => {
  const result = makeRadioButtonsElement(
    makeOptionObjectsArraySimple(["1", "2"]),
    "id",
  );
  const expected: IRadioButtonsElement = {
    type: "radio_buttons",
    action_id: "id",
    options: makeOptionObjectsArraySimple(["1", "2"]),
  };

  assertEquals(result, expected);
});

Deno.test("makeRichTextInputElement makes a Rich Text Input Element", () => {
  const result = makeRichTextInputElement("id", "placeholder");
  const expected: IRichTextInputElement = {
    type: "rich_text_input",
    action_id: "id",
    placeholder: makePlainTextObject("placeholder"),
  };

  assertEquals(result, expected);
});

Deno.test("makeSingleStaticSelectElement makes a Static Single-Select Element", () => {
  const result1 = makeSingleStaticSelectElement(
    makeOptionObjectsArraySimple(["1", "2"]),
    undefined,
    "id",
  );
  const expected1: IStaticSelectElement = {
    type: "static_select",
    action_id: "id",
    options: makeOptionObjectsArraySimple(["1", "2"]),
  };

  assertEquals(result1, expected1);

  const result2 = makeSingleStaticSelectElement(
    undefined,
    makeOptionGroupsArray([["label", makeOptionObjectsArraySimple(["1"])]]),
    "id",
  );
  const expected2: IStaticSelectElement = {
    type: "static_select",
    action_id: "id",
    option_groups: makeOptionGroupsArray([[
      "label",
      makeOptionObjectsArraySimple(["1"]),
    ]]),
  };

  assertEquals(result2, expected2);
});

Deno.test("makeSingleUserSelectElement makes a User Single-Select Element", () => {
  const result = makeSingleUserSelectElement("id");
  const expected: IUsersSelectElement = {
    type: "users_select",
    action_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeTimePickerElement makes a Time Picker Element", () => {
  const result = makeTimePickerElement("id");
  const expected: ITimePickerElement = {
    type: "timepicker",
    action_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeURLInputElement makes a URL Input Element", () => {
  const result = makeURLInputElement("id");
  const expected: IURLTextInputElement = {
    type: "url_text_input",
    action_id: "id",
  };

  assertEquals(result, expected);
});

Deno.test("makeWorkflowButtonElement makes a Workflow Button Element", () => {
  const result = makeWorkflowButtonElement("id", "text", "url", "primary");
  const expected: IWorkflowButtonElement = {
    type: "workflow_button",
    action_id: "id",
    text: makePlainTextObject("text"),
    style: "primary",
    workflow: {
      trigger: {
        url: "url",
      },
    },
  };

  assertEquals(result, expected);
});
