import { Editor, Element, Transforms } from "slate";

export const unwrapLink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && Element.isElement(n) && n.type === "link",
  });
};
