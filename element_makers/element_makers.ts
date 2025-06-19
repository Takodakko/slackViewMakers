import type {
  buttonStyles,
  IButtonElement,
  IChannelsSelectElement,
  ICheckboxesElement,
  IConfirmObject,
  IConversationsSelectElement,
  IDatePickerElement,
  IDateTimePickerElement,
  IDispatchActionConfigObject,
  IEmailTextInputElement,
  IExternalSelectElement,
  IFileInputElement,
  IFileObject,
  IFilterObject,
  IImageElement,
  IMultiChannelsSelectElement,
  IMultiConversationsSelectElement,
  IMultiExternalSelectElement,
  IMultiStaticSelectElement,
  IMultiUsersSelectElement,
  INumberInputElement,
  IOptionGroupObject,
  IOptionObject,
  IOverflowElement,
  IPlainTextInputElement,
  IRadioButtonsElement,
  IRichTextBlock,
  IRichTextInputElement,
  IStaticSelectElement,
  ITimePickerElement,
  IURLTextInputElement,
  IUsersSelectElement,
  IWorkflowButtonElement,
} from "customTypes/custom_types.ts";
import { removeUnneededKeys, textObjectOrUndefined } from "utils/utils.ts";
import { makePlainTextObject } from "objectMakers/object_makers.ts";

/** Make Button Element */
export const makeButtonElement = (
  text: string,
  id?: string,
  val?: string,
  style?: buttonStyles,
  url?: string,
  confirm?: IConfirmObject,
  access?: string,
) => {
  const button: IButtonElement = {
    type: "button",
    style: style,
    text: makePlainTextObject(text),
    action_id: id,
    url: url,
    confirm: confirm,
    accessibility_label: access,
    value: val,
  };
  removeUnneededKeys(button);
  return button;
};

/** Make Channels Select Element */
export const makeChannelsSelectElement = (
  id?: string,
  placeholder?: string,
  init?: string,
  confirm?: IConfirmObject,
  resp?: boolean,
  focus?: boolean,
) => {
  const chan: IChannelsSelectElement = {
    type: "channels_select",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    initial_channel: init,
    confirm: confirm,
    response_url_enabled: resp,
    focus_on_load: focus,
  };
  removeUnneededKeys(chan);
  return chan;
};

/** Make a Checkboxes Element */
export const makeCheckboxesElement = (
  options: IOptionObject[],
  id?: string,
  init?: IOptionObject[],
  confirm?: IConfirmObject,
  focus?: boolean,
) => {
  
  const check: ICheckboxesElement = {
    type: "checkboxes",
    options: options,
    initial_options: init,
    action_id: id,
    confirm: confirm,
    focus_on_load: focus,
  };
  removeUnneededKeys(check);
  return check;
};

/** Make Conversations Select Element (single) */
export const makeConversationsSelectElement = (
  id?: string,
  placeholder?: string,
  init?: string,
  deft?: boolean,
  confirm?: IConfirmObject,
  resp?: boolean,
  filter?: IFilterObject,
  focus?: boolean,
) => {
  const conv: IConversationsSelectElement = {
    type: "conversations_select",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    initial_conversation: init,
    default_to_current_conversation: deft,
    confirm: confirm,
    response_url_enabled: resp,
    filter: filter,
    focus_on_load: focus,
  };
  removeUnneededKeys(conv);
  return conv;
};

/** Makes a Date Picker Element */
export const makeDatePickerElement = (
  id?: string,
  placeholder?: string,
  init?: string,
  confirm?: IConfirmObject,
  focus?: boolean,
) => {
  
  const datepick: IDatePickerElement = {
    type: "datepicker",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    initial_date: init,
    confirm: confirm,
    focus_on_load: focus,
  };
  removeUnneededKeys(datepick);
  return datepick;
};

/** Make Datetime Picker Element */
export const makeDateTimePickerElement = (
  id?: string,
  init?: number,
  confirm?: IConfirmObject,
  focus?: boolean,
) => {
  
  const dateTime: IDateTimePickerElement = {
    type: "datetimepicker",
    action_id: id,
    initial_date_time: init,
    confirm: confirm,
    focus_on_load: focus,
  };
  removeUnneededKeys(dateTime);
  return dateTime;
};

/** Make Email Input Element */
export const makeEmailInputElement = (
  id?: string,
  placeholder?: string,
  init?: string,
  disp?: IDispatchActionConfigObject,
  focus?: boolean,
) => {
  const email: IEmailTextInputElement = {
    type: "email_text_input",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    initial_value: init,
    dispatch_action_config: disp,
    focus_on_load: focus,
  };
  removeUnneededKeys(email);
  return email;
};

/** Make an External Select Element (single) */
export const makeExternalSelectElement = (
  id?: string,
  placeholder?: string,
  init?: IOptionObject,
  min?: number,
  confirm?: IConfirmObject,
  focus?: boolean,
) => {
  const exter: IExternalSelectElement = {
    type: "external_select",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    initial_option: init,
    min_query_length: min,
    confirm: confirm,
    focus_on_load: focus,
  };
  removeUnneededKeys(exter);
  return exter;
};

/** Make File Input Element */
export const makeFileInputElement = (
  id?: string,
  types?: string[],
  max?: number,
) => {
  const file: IFileInputElement = {
    type: "file_input",
    action_id: id,
    filetypes: types,
    max_files: max,
  };
  removeUnneededKeys(file);
  return file;
};

/** Make Image Element */
export const makeImageElement = (
  alt: string,
  url?: string,
  file?: IFileObject,
) => {
  const image: IImageElement = {
    type: "image",
    alt_text: alt,
    image_url: url,
    slack_file: file,
  };
  removeUnneededKeys(image);
  return image;
};

/** Makes a Multi Channel Select Element */
export const makeMultiChannelSelectElement = (
  id?: string,
  placeholder?: string,
  init?: string[],
  confirm?: IConfirmObject,
  max?: number,
  focus?: boolean,
) => {
  const chan: IMultiChannelsSelectElement = {
    type: "multi_channels_select",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    initial_channels: init,
    confirm: confirm,
    max_selected_items: max,
    focus_on_load: focus,
  };
  removeUnneededKeys(chan);
  return chan;
};

/** Makes a Multi Conversations Select Element */
export const makeMultiConversationsSelectElement = (
  id?: string,
  placeholder?: string,
  init?: string[],
  deft?: boolean,
  confirm?: IConfirmObject,
  max?: number,
  filter?: IFilterObject,
  focus?: boolean,
) => {
  const conv: IMultiConversationsSelectElement = {
    type: "multi_conversations_select",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    initial_conversations: init,
    default_to_current_conversation: deft,
    confirm: confirm,
    max_selected_items: max,
    filter: filter,
    focus_on_load: focus,
  };
  removeUnneededKeys(conv);
  return conv;
};

/** Makes a Multi External Select Element */
export const makeMultiExternalSelectElement = (
  id?: string,
  placeholder?: string,
  min?: number,
  init?: IOptionObject[],
  confirm?: IConfirmObject,
  max?: number,
  focus?: boolean,
) => {
  const exter: IMultiExternalSelectElement = {
    type: "multi_external_select",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    min_query_length: min,
    initial_options: init,
    confirm: confirm,
    max_selected_items: max,
    focus_on_load: focus,
  };
  removeUnneededKeys(exter);
  return exter;
};

/** Makes a Multi Static Select Element */
export const makeMultiStaticSelectElement = (
  options?: IOptionObject[],
  groups?: IOptionGroupObject[],
  id?: string,
  init?: IOptionObject[],
  placeholder?: string,
  confirm?: IConfirmObject,
  max?: number,
  focus?: boolean,
) => {
  
  const select: IMultiStaticSelectElement = {
    type: "multi_static_select",
    action_id: id,
    options: options,
    option_groups: groups,
    initial_options: init,
    placeholder: textObjectOrUndefined(placeholder),
    confirm: confirm,
    max_selected_items: max,
    focus_on_load: focus,
  };
  removeUnneededKeys(select);
  return select;
};

/** Make a multi-users select element */
export const makeMultiUserSelectElement = (
  id?: string,
  placeholder?: string,
  init?: string[],
  confirm?: IConfirmObject,
  max?: number,
  focus?: boolean,
) => {
  const multi: IMultiUsersSelectElement = {
    type: "multi_users_select",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    confirm: confirm,
    initial_users: init,
    max_selected_items: max,
    focus_on_load: focus,
  };
  removeUnneededKeys(multi);
  return multi;
};

/** Makes a Number Input Element */
export const makeNumberInputElement = (
  decimal: boolean,
  id?: string,
  placeholder?: string,
  init?: string,
  min?: string,
  max?: string,
  disp?: IDispatchActionConfigObject,
  focus?: boolean,
) => {
  
  const numberInput: INumberInputElement = {
    type: "number_input",
    is_decimal_allowed: decimal,
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    initial_value: init,
    min_value: min,
    max_value: max,
    dispatch_action_config: disp,
    focus_on_load: focus,
  };
  removeUnneededKeys(numberInput);
  return numberInput;
};

/** Make Overflow Menu Element */
export const makeOverflowElement = (
  options: IOptionObject[],
  id?: string,
  confirm?: IConfirmObject,
) => {
  
  const overflow: IOverflowElement = {
    type: "overflow",
    options: options,
    action_id: id,
    confirm: confirm,
  };
  removeUnneededKeys(overflow);
  return overflow;
};

/** Makes a Plain Text Element */
export const makePlainTextInputElement = (
  id?: string,
  placeholder?: string,
  init?: string,
  multi?: boolean,
  min?: number,
  max?: number,
  disp?: IDispatchActionConfigObject,
  focus?: boolean,
) => {
  const plain: IPlainTextInputElement = {
    type: "plain_text_input",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    initial_value: init,
    multiline: multi,
    min_length: min,
    max_length: max,
    dispatch_action_config: disp,
    focus_on_load: focus,
  };
  removeUnneededKeys(plain);
  return plain;
};

/** Make Radio Button Element */
export const makeRadioButtonsElement = (
  options: IOptionObject[],
  id?: string,
  init?: IOptionObject,
  confirm?: IConfirmObject,
  focus?: boolean,
) => {
  const radio: IRadioButtonsElement = {
    type: "radio_buttons",
    options: options,
    action_id: id,
    initial_option: init,
    confirm: confirm,
    focus_on_load: focus,
  };
  removeUnneededKeys(radio);
  return radio;
};

/** Make a Rich Text Input Element */
export const makeRichTextInputElement = (
  id: string,
  placeholder?: string,
  init?: IRichTextBlock,
  dispatch?: IDispatchActionConfigObject,
  focus?: boolean,
) => {
  const rich: IRichTextInputElement = {
    type: "rich_text_input",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    dispatch_action_config: dispatch,
    focus_on_load: focus,
    initial_value: init,
  };
  removeUnneededKeys(rich);
  return rich;
};

/** Makes a Single Static Select Element */
export const makeSingleStaticSelectElement = (
  options?: IOptionObject[],
  groups?: IOptionGroupObject[],
  id?: string,
  init?: IOptionObject,
  placeholder?: string,
  confirm?: IConfirmObject,
  focus?: boolean,
) => {
  
  const staticSelect: IStaticSelectElement = {
    type: "static_select",
    action_id: id,
    options: options,
    option_groups: groups,
    initial_option: init,
    confirm: confirm,
    focus_on_load: focus,
    placeholder: textObjectOrUndefined(placeholder),
  };
  removeUnneededKeys(staticSelect);
  return staticSelect;
};

/** Make a Single User Select Element */
export const makeSingleUserSelectElement = (
  id?: string,
  placeholder?: string,
  init?: string,
  confirm?: IConfirmObject,
  focus?: boolean,
) => {
  const userSelect: IUsersSelectElement = {
    type: "users_select",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    initial_user: init,
    confirm: confirm,
    focus_on_load: focus,
  };
  removeUnneededKeys(userSelect);
  return userSelect;
};

/** Make Time Picker Element */
export const makeTimePickerElement = (
  id?: string,
  plaeholder?: string,
  init?: string,
  confirm?: IConfirmObject,
  focus?: boolean,
  timezone?: string,
) => {
  
  const time: ITimePickerElement = {
    type: "timepicker",
    action_id: id,
    placeholder: textObjectOrUndefined(plaeholder),
    initial_time: init,
    confirm: confirm,
    focus_on_load: focus,
    timezone: timezone,
  };
  removeUnneededKeys(time);
  return time;
};

/** Make URL Input Element */
export const makeURLInputElement = (
  id?: string,
  placeholder?: string,
  init?: string,
  disp?: IDispatchActionConfigObject,
  focus?: boolean,
) => {
  const url: IURLTextInputElement = {
    type: "url_text_input",
    action_id: id,
    placeholder: textObjectOrUndefined(placeholder),
    initial_value: init,
    dispatch_action_config: disp,
    focus_on_load: focus,
  };
  removeUnneededKeys(url);
  return url;
};

/** Make a Workflow Button Element */
export const makeWorkflowButtonElement = (
  id: string,
  text: string,
  url: string,
  style?: buttonStyles,
  access?: string,
) => {
  const button: IWorkflowButtonElement = {
    type: "workflow_button",
    action_id: id,
    text: makePlainTextObject(text),
    workflow: {
      trigger: {
        url: url,
      },
    },
    style: style,
    accessibility_label: access,
  };
  removeUnneededKeys(button);
  return button;
};
