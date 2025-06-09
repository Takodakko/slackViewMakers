import { allRichTextElementTypes, IRichTextElementBroadcast, IRichTextElementChannel, IRichTextElementColor, IRichTextElementDate, IRichTextElementEmoji, IRichTextElementLink, IRichTextElementText, IRichTextElementUser, IRichTextElementUsergroup, IRichTextList, IRichTextSection } from "customTypes/custom_types.ts";
import { removeUnneededKeys } from "utils/utils.ts";

/** Makes Rich Text Broadcast */
export const makeRichTextBroadcast = (range: "here" | "channel" | "everyone") => {
    const rich: IRichTextElementBroadcast = {
        type: "broadcast",
        range: range,
    };
    return rich;
}
/** Makes Rich Text CHannel */
export const makeRichTextChannel = (id: string, style?: "bold" | "italic" | "strike" | "highlight" | "client_highlight" | "unlink") => {
    const rich: IRichTextElementChannel = {
        type: "channel",
        channel_id: id,
        style: style,
    }
    removeUnneededKeys(rich);
    return rich;
}

/** Makes Rich Text Color */
export const makeRichTextColor = (val: string) => {
    const rich: IRichTextElementColor = {
        type: "color",
        value: val
    };
    return rich;
}

/** Makes Rich Text Date */
export const makeRichTextDate = (timestamp: number, format: string, url?: string, fallback?: string) => {
    const rich: IRichTextElementDate = {
        type: "date",
        timestamp: timestamp,
        format: format,
        url: url,
        fallback: fallback,
    };
    removeUnneededKeys(rich);
    return rich;
}

/** Makes Rich Text Emoji */
export const makeRichTextEmoji = (name: string, unicode?: string) => {
    const rich: IRichTextElementEmoji = {
        type: "emoji",
        name: name,
        unicode: unicode,
    };
    removeUnneededKeys(rich);
    return rich;
}

/** Makes Rich Text Link */
export const makeRichTextLink = (url: string, text?: string, unsafe?: boolean, style?: {bold?: boolean, italic?: boolean, strike?: boolean, code?: boolean}) => {
    const rich: IRichTextElementLink = {
        type: "link",
        url: url,
        text: text,
        unsafe: unsafe,
    }
    removeUnneededKeys(rich);
    if (style) {
        removeUnneededKeys(style);
        rich.style = style;
    }
    return rich;
}

/** Makes Rich Text List */
export const makeRichTextList = (style: "bullet" | "ordered", elements: IRichTextSection[], indent?: number, offset?: number, border?: number) => {
    const rich: IRichTextList = {
        type: "rich_text_list",
        style: style,
        elements: elements,
        indent: indent,
        offset: offset,
        border: border,
    };
    removeUnneededKeys(rich);
    return rich;
}

/** Make Rich Text Section */
export const makeRichTextSection = (elements: allRichTextElementTypes[]) => {
    const rich: IRichTextSection = {
        type: "rich_text_section",
        elements: elements,
    };
    return rich;
}

/** Makes Rich Text Text */
export const makeRichTextText = (text: string, style?: {bold?: boolean, italic?: boolean, strike?: boolean, code?: boolean}) => {
    const rich: IRichTextElementText = {
        type: "text",
        text: text,
    };
    if (style) {
        removeUnneededKeys(style);
        rich.style = style;
    }
    return rich;
}

/** Makes Rich Text User */
export const makeRichTextUser = (id: string, style?: {bold?: boolean, italic?: boolean, strike?: boolean, code?: boolean}) => {
    const rich: IRichTextElementUser = {
        type: "user",
        user_id: id,
    };
    if (style) {
        removeUnneededKeys(style);
        rich.style = style;
    }
    return rich;
}

/** Make Rich Text Usergroup */
export const makeRichTextUsergroup = (id: string, style?: {bold?: boolean, italic?: boolean, strike?: boolean, highlight?: boolean, client_highlight?: boolean, unlink?: boolean}) => {
    const rich: IRichTextElementUsergroup = {
        type: "usergroup",
        usergroup_id: id,
    };
    if (style) {
        removeUnneededKeys(style);
        rich.style = style;
    }
    return rich;
}