import { allActionsElements, allContextElements, allInputElements, allRichTextBlockElements, allSectionElements, IActionsBlock, IContextBlock, IDividerBlock, IFileBlock, IHeaderBlock, IInputBlock, IMarkdownBlock, IRichTextBlock, ISectionBlock, ITextObject } from "customTypes/custom_types.ts";
import { makeMrkdwnTextObject, makePlainTextObject } from "objectMakers/object_makers.ts";
import { removeUnneededKeys, textObjectOrUndefined } from "utils/utils.ts";

/** Make Actions Block */
export const makeActionsBlock = (id: string, elements: Array<allActionsElements>) => {
    const block: IActionsBlock = {
        type: "actions",
        block_id: id,
        elements: elements,
    };
    return block;
}

/** Make a Context Block */
export const makeContextBlock = (id: string, elements: allContextElements[]) => {
    const block: IContextBlock = {
        type: "context",
        block_id: id,
        elements: elements,
    };
    return block;
}

/** Make a Divider Block */
export const makeDividerBlock = (id: string) => {
    const block: IDividerBlock = {
        type: "divider",
        block_id: id
    };
    return block;
}

/** Make a File Block */
export const makeFileBlock = (id: string, ex_id: string, source: string) => {
    const block: IFileBlock = {
        type: "file",
        block_id: id,
        external_id: ex_id,
        source: source,
    };
    return block;
}

/** Make a Header Block */
export const makeHeaderBlock = (id: string, text: string) => {
    const block: IHeaderBlock = {
        type: "header",
        block_id: id,
        text: makePlainTextObject(text)
    };
    return block;
}


/** Make an Input Block */
export const makeInputBlock = (id: string, label: string, element: allInputElements, optional?: boolean, disp?: boolean, hint?: string,) => {
    const block: IInputBlock = {
        type: "input",
        block_id: id,
        label: makePlainTextObject(label),
        element: element,
        optional: optional,
        hint: textObjectOrUndefined(hint),
        dispatch_action: disp,
    }
    removeUnneededKeys(block);
    return block;
}

/** Make a Markdown Block */
export const makeMarkdownBlock = (id: string, text: string) => {
    const block: IMarkdownBlock = {
        type: "markdown",
        block_id: id,
        text: text,
    };
    return block;
}

/** Make Rich Text Block */
export const makeRichTextBlock = (id: string, elements: allRichTextBlockElements[]) => {
    const block: IRichTextBlock = {
        type: "rich_text",
        block_id: id,
        elements: elements,
    };
    return block;
}

/** Make a Section Block */
export const makeSectionBlock = (id: string, text?: string, textType?: "mrkdwn" | "plain_text", fields?: Array<ITextObject>, accessory?: allSectionElements, expand?: boolean) => {
    if (!text && !fields) {
        throw new Error("Need to provide text or fields");
    }
    if (text && !textType) {
        throw new Error("Must provide text type when using text");
    }
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
    }
    removeUnneededKeys(block);
    return block;
}

