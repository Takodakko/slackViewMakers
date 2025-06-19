import { allBlockTypes, ISlackModal } from "customTypes/custom_types.ts";
import { makePlainTextObject } from "objectMakers/object_makers.ts";
import { removeUnneededKeys, textObjectOrUndefined } from "utils/utils.ts";

/** Make a Slack Modal */
export const makeModal = (
  title: string,
  blocks: allBlockTypes[],
  id?: string,
  close?: string,
  submit?: string,
  pm?: string,
  clear?: boolean,
  notify?: boolean,
  exid?: string,
  noSubmit?: boolean,
) => {
  const modal: ISlackModal = {
    type: "modal",
    title: makePlainTextObject(title),
    blocks: blocks,
    close: textObjectOrUndefined(close),
    submit: textObjectOrUndefined(submit),
    private_metadata: pm,
    callback_id: id,
    clear_on_close: clear,
    notify_on_close: notify,
    external_id: exid,
    submit_disabled: noSubmit,
  };
  removeUnneededKeys(modal);
  return modal;
};
