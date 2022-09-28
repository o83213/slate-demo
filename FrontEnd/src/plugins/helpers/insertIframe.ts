import { Editor, Transforms, Element } from "slate";
export const insertIframe = (editor: Editor, url: string) => {
  console.log(url);
  const text = { text: "" };
  const embed: Element = { type: "embed", url, children: [text] };
  Transforms.insertNodes(editor, embed);
};
