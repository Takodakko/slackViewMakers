import {
  buttonStyles,
  IConfirmObject,
  IDispatchActionConfigObject,
  IMrkdwnTextObject,
  IOptionGroupObject,
  IOptionObject,
  IPlainTextObject,
} from "customTypes/custom_types.ts";
import { removeUnneededKeys } from "utils/utils.ts";

/** Make a Plain Text Object */
export const makePlainTextObject = (text: string) => {
  const obj: IPlainTextObject = {
    type: "plain_text",
    text: text,
  };
  return obj;
};

/** Makes a mrkdwn text object */
export const makeMrkdwnTextObject = (text: string) => {
  const obj: IMrkdwnTextObject = {
    type: "mrkdwn",
    text: text,
  };
  return obj;
};

/** Makes a single Option Object */
export const makeSingleOptionObject = (text: string, val: string) => {
  const option: IOptionObject = {
    value: val,
    text: makePlainTextObject(text),
  };
  return option;
};

/** Makes an array of option objects with text and value having same value */
export const makeOptionObjectsArraySimple = (textVal: string[]) => {
  const options: IOptionObject[] = [];
  textVal.forEach((item) => {
    const option = makeSingleOptionObject(item, item);
    options.push(option);
  });
  return options;
};

/** Makes an array of option objects with different values for text and value (Text: index 0, Value: index 1 of each tuple) */
export const makeOptionObjectsArrayDiffVals = (
  textVal: Array<[string, string]>,
) => {
  const options: IOptionObject[] = [];
  textVal.forEach((set) => {
    const option = makeSingleOptionObject(set[0], set[1]);
    options.push(option);
  });
  return options;
};

/** Makes a single Option Group */
export const makeSingleOptionGroup = (
  label: string,
  options: IOptionObject[],
) => {
  const group: IOptionGroupObject = {
    label: makePlainTextObject(label),
    options: options,
  };
  return group;
};

/** Makes an array of option groups. Each tuple is label text at index 0 and options at index 1. */
export const makeOptionGroupsArray = (
  groups: Array<[string, IOptionObject[]]>,
) => {
  const groupArray: IOptionGroupObject[] = [];
  groups.forEach((set) => {
    groupArray.push(
      makeSingleOptionGroup(set[0], set[1]),
    );
  });
  return groupArray;
};

/** Makes a Confirm Object */
export const makeConfirmObject = (
  title: string,
  text: string,
  confirm: string,
  deny: string,
  style?: buttonStyles,
) => {
  const conf: IConfirmObject = {
    title: makePlainTextObject(title),
    text: makePlainTextObject(text),
    confirm: makePlainTextObject(confirm),
    deny: makePlainTextObject(deny),
    style: style,
  };
  removeUnneededKeys(conf);
  return conf;
};

/** Makes a Dispatch Config Object */
export const makeDispatchConfigObject = (
  triggers: Array<"on_enter_pressed" | "on_character_entered">,
) => {
  const trigger: IDispatchActionConfigObject = {
    trigger_actions_on: triggers,
  };
  return trigger;
};
