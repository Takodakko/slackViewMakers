
export type buttonStyles = "primary" | "danger" | "default";

/////////// ------------------ Object Types ----------------------

/** Confirm Object */
export interface IConfirmObject {
  title: IPlainTextObject;
  text: IPlainTextObject;
  confirm: IPlainTextObject;
  deny: IPlainTextObject;
  style?: buttonStyles;
}

/** Conversation Filter Object */
export interface IConversationFilterObject {
  include?: string[];
  exclude_external_shared_channels?: boolean;
  exclude_bot_users?: boolean;
}

/** Dispatch Action Config Object */
export interface IDispatchActionConfigObject {
  trigger_actions_on?: Array<"on_enter_pressed" | "on_character_entered">;
}

/** File Object Requires EITHER id OR url */
export interface IFileObject {
  id?: string;
  url?: string;
}

/** Filter Object: All optional, but at least one must be used. */
export interface IFilterObject {
  include?: string[];
  exclude_external_shared_channels?: boolean;
  exclude_bot_users?: boolean;
}

/** Mrkdwn Text Object */
export interface IMrkdwnTextObject {
  type: "mrkdwn";
  text: string;
  verbatim?: boolean;
}

/** Option Group Object */
export interface IOptionGroupObject {
  label: IPlainTextObject;
  options: IOptionObject[];
}

/** Option Object for dropdowns etc. */
export interface IOptionObject {
  value: string;
  text: IPlainTextObject;
}

/** Plain Text Object */
export interface IPlainTextObject {
  type: "plain_text";
  text: string;
  emoji?: boolean;
}

/** Either type of Text Object */
export type ITextObject = IPlainTextObject | IMrkdwnTextObject;

/////////// ------------------ Element Types ----------------------
/** Button Element: Modals / Messages > Section Block / Actions Block */
export interface IButtonElement {
  type: "button";
  style?: buttonStyles;
  text: IPlainTextObject;
  value?: string;
  action_id?: string;
  url?: string;
  confirm?: IConfirmObject;
  accessibility_label?: string;
}

/** Channels Select Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface IChannelsSelectElement {
  type: "channels_select";
  action_id?: string;
  initial_channel?: string;
  confirm?: IConfirmObject;
  response_url_enabled?: boolean;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Checkboxes Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface ICheckboxesElement {
  type: "checkboxes";
  action_id?: string;
  options: IOptionObject[];
  initial_options?: IOptionObject[];
  confirm?: IConfirmObject;
  focus_on_load?: boolean;
}

/** Conversations Select Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface IConversationsSelectElement {
  type: "conversations_select";
  action_id?: string;
  initial_conversation?: string;
  default_to_current_conversation?: boolean;
  confirm?: IConfirmObject;
  response_url_enabled?: boolean;
  filter?: IFilterObject;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Date Picker Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface IDatePickerElement {
  type: "datepicker";
  action_id?: string;
  initial_date?: string; // YYYY-MM-DD
  confirm?: IConfirmObject;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Date Time Picker Element: Modals / Messages > Actions Block / Input Block */
export interface IDateTimePickerElement {
  type: "datetimepicker";
  action_id?: string;
  initial_date_time?: number;
  confirm?: IConfirmObject;
  focus_on_load?: boolean;
}

/** Email Text Input Element: Modals > Input Block */
export interface IEmailTextInputElement {
  type: "email_text_input";
  action_id?: string;
  initial_value?: string;
  dispatch_action_config?: IDispatchActionConfigObject;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** External Select Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface IExternalSelectElement {
  type: "external_select";
  action_id?: string;
  initial_option?: IOptionObject;
  min_query_length?: number;
  confirm?: IConfirmObject;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** File Input Element: Modals > Input Block */
export interface IFileInputElement {
  type: "file_input";
  action_id?: string;
  filetypes?: string[];
  max_files?: number;
}

/** Image Element: Modals > Input Block */
export interface IImageElement {
  type: "image";
  alt_text: string;
  image_url?: string;
  slack_file?: IFileObject;
}

/** Multi Channels Select Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface IMultiChannelsSelectElement {
  type: "multi_channels_select";
  action_id?: string;
  initial_channels?: string[];
  confirm?: IConfirmObject;
  max_selected_items?: number;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Multi Conversation Select Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface IMultiConversationsSelectElement {
  type: "multi_conversations_select";
  action_id?: string;
  initial_conversations?: string[];
  default_to_current_conversation?: boolean;
  confirm?: IConfirmObject;
  max_selected_items?: number;
  filter?: IFilterObject;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Multi External Select Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface IMultiExternalSelectElement {
  type: "multi_external_select";
  action_id?: string;
  min_query_length?: number;
  initial_options?: IOptionObject[];
  confirm?: IConfirmObject;
  max_selected_items?: number;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Multi Static Select Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface IMultiStaticSelectElement {
  type: "multi_static_select";
  action_id?: string;
  options?: IOptionObject[];
  option_groups?: IOptionGroupObject[];
  initial_options?: IOptionObject[];
  confirm?: IConfirmObject;
  max_selected_items?: number;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Multi Users Select Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface IMultiUsersSelectElement {
  type: "multi_users_select";
  action_id?: string;
  initial_users?: string[];
  confirm?: IConfirmObject;
  max_selected_items?: number;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Number Input Element: Modals > Input Block */
export interface INumberInputElement {
  type: "number_input";
  is_decimal_allowed: boolean;
  action_id?: string;
  initial_value?: string;
  min_value?: string;
  max_value?: string;
  dispatch_action_config?: IDispatchActionConfigObject;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Overflow Menu Element: Modals / Messages > Section Block / Actions Block */
export interface IOverflowElement {
  type: "overflow";
  action_id?: string;
  options: IOptionObject[];
  confirm?: IConfirmObject;
}

/** Plain Text Input Element: Modals / Messages > Input Block */
export interface IPlainTextInputElement {
  type: "plain_text_input";
  action_id?: string;
  initial_value?: string;
  multiline?: boolean;
  min_length?: number;
  max_length?: number;
  dispatch_action_config?: IDispatchActionConfigObject;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Radio Buttons Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface IRadioButtonsElement {
  type: "radio_buttons";
  action_id?: string;
  options: IOptionObject[];
  initial_option?: IOptionObject;
  confirm?: IConfirmObject;
  focus_on_load?: boolean;
}

/** Rich Text Input Element: Modals > Input Block */
export interface IRichTextInputElement {
  type: "rich_text_input";
  action_id: string;
  initial_value?: IRichTextBlock;
  dispatch_action_config?: IDispatchActionConfigObject;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Static Select Element (single type): Modals / Messages > Section Block / Actions Block / Input Block */
export interface IStaticSelectElement {
  type: "static_select";
  action_id?: string;
  options?: IOptionObject[];
  option_groups?: IOptionGroupObject[];
  initial_option?: IOptionObject;
  confirm?: IConfirmObject;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Time Picker Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface ITimePickerElement {
  type: "timepicker";
  action_id?: string;
  initial_time?: string;
  confirm?: IConfirmObject;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
  timezone?: string;
}

/** URL Text Input Element: Modals > Input Block */
export interface IURLTextInputElement {
  type: "url_text_input";
  action_id?: string;
  initial_value?: string;
  dispatch_action_config?: IDispatchActionConfigObject;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Users Select Element: Modals / Messages > Section Block / Actions Block / Input Block */
export interface IUsersSelectElement {
  type: "users_select";
  action_id?: string;
  initial_user?: string;
  confirm?: IConfirmObject;
  focus_on_load?: boolean;
  placeholder?: IPlainTextObject;
}

/** Workflow Button Element: Messages > Setion Block / Actions Block */
export interface IWorkflowButtonElement {
  type: "workflow_button";
  style?: buttonStyles;
  text: IPlainTextObject;
  action_id: string;
  workflow: {
    trigger: {
      url: string;
    };
  };
  accessibility_label?: string;
}

export type allInputElements =
  | ICheckboxesElement
  | IDatePickerElement
  | IDateTimePickerElement
  | IEmailTextInputElement
  | IFileInputElement
  | IMultiStaticSelectElement
  | IMultiUsersSelectElement
  | INumberInputElement
  | IPlainTextInputElement
  | IRadioButtonsElement
  | IRichTextInputElement
  | IStaticSelectElement
  | ITimePickerElement
  | IURLTextInputElement
  | IUsersSelectElement;

export type allActionsElements =
  | IButtonElement
  | ICheckboxesElement
  | IDatePickerElement
  | IDateTimePickerElement
  | IMultiStaticSelectElement
  | IOverflowElement
  | IStaticSelectElement
  | ITimePickerElement
  | IWorkflowButtonElement;

export type allContextElements =
  | IPlainTextObject
  | IMrkdwnTextObject
  | IImageElement;

export type allSectionElements =
  | IButtonElement
  | ICheckboxesElement
  | IDatePickerElement
  | IImageElement
  | IMultiStaticSelectElement
  | IOverflowElement
  | IRadioButtonsElement
  | IStaticSelectElement
  | ITimePickerElement
  | IWorkflowButtonElement;

/////////// ------------------ Rich Text Element Types -----------------
/** Rich Text Broadcast */
export interface IRichTextElementBroadcast {
  type: "broadcast";
  range: "here" | "channel" | "everyone";
}

/** Rich Text Color */
export interface IRichTextElementColor {
  type: "color";
  value: string;
}

/** Rich Text Channel */
export interface IRichTextElementChannel {
  type: "channel";
  channel_id: string;
  style?:
    | "bold"
    | "italic"
    | "strike"
    | "highlight"
    | "client_highlight"
    | "unlink";
}

/** Rich Text Date */
export interface IRichTextElementDate {
  type: "date";
  timestamp: number;
  format: string;
  url?: string;
  fallback?: string;
}

/** Rich Text Emoji */
export interface IRichTextElementEmoji {
  type: "emoji";
  name: string;
  unicode?: string;
}

/** Rich Text Link */
export interface IRichTextElementLink {
  type: "link";
  url: string;
  text?: string;
  unsafe?: boolean;
  style?: {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    code?: boolean;
  };
}

/** Rich Text Text */
export interface IRichTextElementText {
  type: "text";
  text: string;
  style?: {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    code?: boolean;
  };
}

/** Rich Text User */
export interface IRichTextElementUser {
  type: "user";
  user_id: string;
  style?: {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    highlight?: boolean;
    client_highlight?: boolean;
    unlink?: boolean;
  };
}

/** Rich Text Usergroup */
export interface IRichTextElementUsergroup {
  type: "usergroup";
  usergroup_id: string;
  style?: {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    highlight?: boolean;
    client_highlight?: boolean;
    unlink?: boolean;
  };
}

export type allRichTextElementTypes =
  | IRichTextElementBroadcast
  | IRichTextElementChannel
  | IRichTextElementColor
  | IRichTextElementDate
  | IRichTextElementEmoji
  | IRichTextElementLink
  | IRichTextElementText
  | IRichTextElementUser
  | IRichTextElementUsergroup;

/////////// ------------------ Rich Text Block Elements -----------------

/** Rich Text List */
export interface IRichTextList {
  type: "rich_text_list";
  style: "bullet" | "ordered";
  elements: Array<IRichTextSection>;
  indent?: number;
  offset?: number;
  border?: number;
}

/** Rich Text Preformatted */
export interface IRichTextPreformatted {
  type: "rich_text_preformatted";
  elements: Array<allRichTextElementTypes>;
  border?: number;
}

/** Rich Text Quote */
export interface IRichTextQuote {
  type: "rich_text_quote";
  elements: Array<allRichTextElementTypes>;
  border?: number;
}

/** Rich Text Section */
export interface IRichTextSection {
  type: "rich_text_section";
  elements: Array<allRichTextElementTypes>;
}

export type allRichTextBlockElements =
  | IRichTextSection
  | IRichTextList
  | IRichTextPreformatted
  | IRichTextQuote;

/////////// ------------------ Block Types -----------------------

export interface ISlackBlock {
  block_id?: string;
}

/** Actions Block */
export interface IActionsBlock extends ISlackBlock {
  type: "actions";
  elements: Array<allActionsElements>;
}

/** Context Block */
export interface IContextBlock extends ISlackBlock {
  type: "context";
  elements: Array<allContextElements>;
}

/** Divider Block */
export interface IDividerBlock extends ISlackBlock {
  type: "divider";
}

/** File Block */
export interface IFileBlock extends ISlackBlock {
  type: "file";
  external_id: string;
  source: string;
}

/** Header Block */
export interface IHeaderBlock extends ISlackBlock {
  type: "header";
  text: IPlainTextObject;
}

/** Image Block */
export interface IImageBlock extends ISlackBlock {
  type: "image";
  alt_text: string;
  image_url?: string;
  slack_file?: IFileObject;
  title?: IPlainTextObject;
}

/** Input Block */
export interface IInputBlock extends ISlackBlock {
  type: "input";
  label: IPlainTextObject;
  element: allInputElements;
  dispatch_action?: boolean;
  hint?: IPlainTextObject;
  optional?: boolean;
}

/** Markdown Block */
export interface IMarkdownBlock extends ISlackBlock {
  type: "markdown";
  text: string;
}

/** Rich Text Block */
export interface IRichTextBlock extends ISlackBlock {
  type: "rich_text";
  elements: Array<allRichTextBlockElements>;
}

/** Section Block */
export interface ISectionBlock extends ISlackBlock {
  type: "section";
  text?: ITextObject;
  fields?: Array<ITextObject>;
  accessory?: allSectionElements;
  expand?: boolean;
}

/** Video Block */
export interface IVideoBlock extends ISlackBlock {
  type: "video";
  alt_text: string;
  author_name?: string;
  description?: IPlainTextObject;
  provider_icon_url?: string;
  provider_name?: string;
  title?: IPlainTextObject;
  title_url?: string;
  thumbnail_url?: string;
  video_url?: string;
}

export type allBlockTypes = IActionsBlock | IContextBlock | IDividerBlock | IFileBlock | IHeaderBlock | IImageBlock | IInputBlock | IMarkdownBlock | IRichTextBlock | ISectionBlock | IVideoBlock;

//////////// ----------------- Slack View Types ----------------------
/** Slack Modal */
export interface ISlackModal {
  type: "modal";
  callback_id?: string;
  notify_on_close?: boolean;
  clear_on_close?: boolean;
  private_metadata?: string;
  external_id?: string;
  submit_disabled?: boolean;
  title: IPlainTextObject;
  submit?: IPlainTextObject;
  close?: IPlainTextObject;
  blocks: allBlockTypes[];
}
