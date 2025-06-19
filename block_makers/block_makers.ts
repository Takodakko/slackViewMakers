import type {
  allActionsElements,
  allContextElements,
  allInputElements,
  allRichTextBlockElements,
  allSectionElements,
  IActionsBlock,
  IContextBlock,
  IDividerBlock,
  IFileBlock,
  IFileObject,
  IHeaderBlock,
  IImageBlock,
  IInputBlock,
  IMarkdownBlock,
  IRichTextBlock,
  ISectionBlock,
  ITextObject,
  IVideoBlock,
} from "customTypes/custom_types.ts";
import {
  makeMrkdwnTextObject,
  makePlainTextObject,
} from "objectMakers/object_makers.ts";
import { removeUnneededKeys, textObjectOrUndefined } from "utils/utils.ts";

/** Make Actions Block */
export const makeActionsBlock = (
  elements: Array<allActionsElements>,
  id?: string,
) => {
  const block: IActionsBlock = {
    type: "actions",
    block_id: id,
    elements: elements,
  };
  removeUnneededKeys(block);
  return block;
};

/** Make a Context Block */
export const makeContextBlock = (
  elements: allContextElements[],
  id?: string,
) => {
  const block: IContextBlock = {
    type: "context",
    block_id: id,
    elements: elements,
  };
  removeUnneededKeys(block);
  return block;
};

/** Make a Divider Block */
export const makeDividerBlock = (id?: string) => {
  const block: IDividerBlock = {
    type: "divider",
    block_id: id,
  };
  removeUnneededKeys(block);
  return block;
};

/** Make a File Block */
export const makeFileBlock = (ex_id: string, source: string, id?: string) => {
  const block: IFileBlock = {
    type: "file",
    block_id: id,
    external_id: ex_id,
    source: source,
  };
  removeUnneededKeys(block);
  return block;
};

/** Make a Header Block */
export const makeHeaderBlock = (text: string, id?: string) => {
  const block: IHeaderBlock = {
    type: "header",
    block_id: id,
    text: makePlainTextObject(text),
  };
  removeUnneededKeys(block);
  return block;
};

/** Make an Image Block */
export const makeImageBlock = (alt: string, id?: string, url?: string, file?: IFileObject, title?: string) => {
  const block: IImageBlock = {
    type: "image",
    alt_text: alt,
    block_id: id,
    slack_file: file,
    image_url: url,
    title: textObjectOrUndefined(title)
  }
  removeUnneededKeys(block);
  return block;
}

/** Make an Input Block */
export const makeInputBlock = (
  label: string,
  element: allInputElements,
  id?: string,
  optional?: boolean,
  disp?: boolean,
  hint?: string,
) => {
  const block: IInputBlock = {
    type: "input",
    block_id: id,
    label: makePlainTextObject(label),
    element: element,
    optional: optional,
    hint: textObjectOrUndefined(hint),
    dispatch_action: disp,
  };
  removeUnneededKeys(block);
  return block;
};

/** Make a Markdown Block */
export const makeMarkdownBlock = (text: string, id?: string) => {
  const block: IMarkdownBlock = {
    type: "markdown",
    block_id: id,
    text: text,
  };
  removeUnneededKeys(block);
  return block;
};

/** Make Rich Text Block */
export const makeRichTextBlock = (
  elements: allRichTextBlockElements[],
  id?: string
) => {
  const block: IRichTextBlock = {
    type: "rich_text",
    block_id: id,
    elements: elements,
  };
  removeUnneededKeys(block);
  return block;
};

/** Make a Section Block */
export const makeSectionBlock = (
  id?: string,
  text?: string,
  textType?: "mrkdwn" | "plain_text",
  fields?: Array<ITextObject>,
  accessory?: allSectionElements,
  expand?: boolean,
) => {
  let textObj: ITextObject | undefined = undefined;
  if (text && textType === "plain_text") {
    textObj = makePlainTextObject(text);
  }
  if (text && textType === "mrkdwn") {
    textObj = makeMrkdwnTextObject(text);
  }
  const block: ISectionBlock = {
    type: "section",
    block_id: id,
    text: textObj,
    fields: fields,
    accessory: accessory,
    expand: expand,
  };
  removeUnneededKeys(block);
  return block;
};

/** Make a Video Block */
export const makeVideoBlock = (alt: string, author?: string, id?: string, descr?: string, icon?: string, provider_name?: string, title?: string, title_url?: string, thumb?: string, video_url?: string) => {
  const block: IVideoBlock = {
    type: "video",
    alt_text: alt,
    author_name: author,
    block_id: id,
    description: textObjectOrUndefined(descr),
    provider_icon_url: icon,
    provider_name: provider_name,
    title: textObjectOrUndefined(title),
    title_url: title_url,
    thumbnail_url: thumb,
    video_url: video_url
  }
  removeUnneededKeys(block);
  return block;
}