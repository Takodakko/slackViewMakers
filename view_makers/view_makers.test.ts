import { assertEquals } from "std/assert/assert_equals.ts";
import { makeModal } from "./view_makers.ts";
import { makeDividerBlock } from "blockMakers/block_makers.ts";
import { ISlackModal } from "customTypes/custom_types.ts";

Deno.test("makeModal makes a Slack modal", () => {
  const blocks = makeDividerBlock("id");
  const result1 = makeModal(
    "title",
    [blocks],
    "id",
    "close",
    "submit",
    "private",
    true,
    true,
    "exid",
    false,
  );
  const result2 = makeModal("title", [blocks]);

  const expected1: ISlackModal = {
    type: "modal",
    title: {
      type: "plain_text",
      text: "title",
    },
    blocks: [blocks],
    callback_id: "id",
    close: {
      type: "plain_text",
      text: "close",
    },
    submit: {
      type: "plain_text",
      text: "submit",
    },
    private_metadata: "private",
    clear_on_close: true,
    notify_on_close: true,
    external_id: "exid",
    submit_disabled: false,
  };
  const expected2: ISlackModal = {
    type: "modal",
    title: {
      type: "plain_text",
      text: "title",
    },
    blocks: [blocks],
  };

  assertEquals(result1, expected1);
  assertEquals(result2, expected2);
});
