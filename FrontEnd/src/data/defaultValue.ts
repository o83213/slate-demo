import { Descendant } from "slate";
// export const defaultValue: Descendant[] = [
//   {
//     type: "paragraph",
//     children: [
//       { text: "This is editable " },
//       { text: "rich", bold: true },
//       { text: " text, " },
//       { text: "much", italic: true },
//       { text: " better than a " },
//       { text: "<textarea>", code: true },
//       { text: "!" },
//     ],
//   },
//   {
//     type: "paragraph",
//     children: [
//       {
//         text: "Since it's rich text, you can do things like turn a selection of text ",
//       },
//       { text: "bold", bold: true },
//       {
//         text: ", or add a semantically rendered block quote in the middle of the page, like this:",
//       },
//     ],
//   },
//   {
//     type: "block-quote",
//     children: [{ text: "A wise quote." }],
//   },
//   {
//     type: "paragraph",
//     align: "center",
//     children: [{ text: "Try it out for yourself!" }],
//   },
// ];
export const defaultValue: Descendant[] = [
  {
    type: "paragraph",
    children: [
      {
        text: "In addition to block nodes, you can create inline nodes. Here is a ",
      },
      {
        type: "link",
        url: "https://en.wikipedia.org/wiki/Hypertext",
        children: [{ text: "hyperlink" }],
      },
      {
        text: ", and here is a more unusual inline: an ",
      },
      // {
      //   type: "button",
      //   children: [{ text: "editable button" }],
      // },
      {
        text: "!",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "There are two ways to add links. You can either add a link via the toolbar icon above, or if you want in on a little secret, copy a URL to your keyboard and paste it while a range of text is selected. ",
      },
      // The following is an example of an inline at the end of a block.
      // This is an edge case that can cause issues.
      {
        type: "link",
        url: "https://twitter.com/JustMissEmma/status/1448679899531726852",
        children: [{ text: "Finally, here is our favorite dog video." }],
      },
      { text: "" },
    ],
  },
];
