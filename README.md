## This is a collection of typings for Slack UI, and functions to make the JSON for that UI.

# Functions
Functions for making the JSON for views are broken into Blocks, Views (only modal), elements, objects, and the Rich Text element types.

- `/block_makers/`: Contains functions to make Blocks like Input Blocks, Divider Blocks, etc.
- `/element_makers/`: Contains functions to make Elements, such as Number Input Elements, etc, that are used in certain blocks.
- `/object_makers/`: Contains functions to make objects like Plain Text Objects, or Confirm Objects, etc.
- `/rich_text_makers/`: Contains functions for making the different Rich Text types that are used to create some sort of Rich Text, so things like Rich Text Lists, etc.
- `/view_makers/`: Only Contains a function to make a Modal since Deno Workflow Apps don't have a Home Tab.

- `/utils/`: Just contains a couple of utility functions used throughout.


# Typings

`/custom_types/` contains a file with the different types of view typings. You may notice, `block_id` is required in Block types, even though the Slack documentation says (accurately) that it is an optional property. This is because I extended the Slack `BlockElement` type when making the Block types, and `BlockElement` has `block_id` set to be required.