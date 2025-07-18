import type {
  buttonStyles,
  IConfirmObject,
  IConversationFilterObject,
  IDispatchActionConfigObject,
  IMrkdwnTextObject,
  IOptionGroupObject,
  IOptionObject,
  IPlainTextObject,
} from "customTypes/custom_types.ts";
import { removeUnneededKeys } from "utils/utils.ts";

/** Make a Plain Text Object */
export const makePlainTextObject = (text: string): IPlainTextObject => {
  const obj: IPlainTextObject = {
    type: "plain_text",
    text: text,
  };
  return obj;
};

/** Makes a mrkdwn text object */
export const makeMrkdwnTextObject = (text: string): IMrkdwnTextObject => {
  const obj: IMrkdwnTextObject = {
    type: "mrkdwn",
    text: text,
  };
  return obj;
};

/** Makes a single Option Object */
export const makeSingleOptionObject = (text: string, val: string): IOptionObject => {
  const option: IOptionObject = {
    value: val,
    text: makePlainTextObject(text),
  };
  return option;
};

/** Makes an array of option objects with text and value having same value */
export const makeOptionObjectsArraySimple = (textVal: string[]): IOptionObject[] => {
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
): IOptionObject[] => {
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
): IOptionGroupObject => {
  const group: IOptionGroupObject = {
    label: makePlainTextObject(label),
    options: options,
  };
  return group;
};

/** Makes an array of option groups. Each tuple is label text at index 0 and options at index 1. */
export const makeOptionGroupsArray = (
  groups: Array<[string, IOptionObject[]]>,
): IOptionGroupObject[] => {
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
): IConfirmObject => {
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

/** Makes a Conversation Filter Object */
export const makeConversationFilterObject = (include?: string[], exclude_ex?: boolean, exclude_bot?: boolean): IConversationFilterObject => {
  const conv: IConversationFilterObject = {
    include: include,
    exclude_bot_users: exclude_bot,
    exclude_external_shared_channels: exclude_ex
  }
  removeUnneededKeys(conv);
  return conv;
}

/** Makes a Dispatch Config Object */
export const makeDispatchConfigObject = (
  triggers: Array<"on_enter_pressed" | "on_character_entered">,
): IDispatchActionConfigObject => {
  const trigger: IDispatchActionConfigObject = {
    trigger_actions_on: triggers,
  };
  return trigger;
};
