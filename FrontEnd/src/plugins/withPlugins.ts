import { Editor } from "slate";
export const withPlugins = (editor: Editor) => {
  const { isInline, isVoid } = editor;

  editor.isInline = (element) =>
    ["link", "button"].includes(element.type) || isInline(element);
  editor.isVoid = (element) => {
    return ["image", "embed", "video"].includes(element.type)
      ? true
      : isVoid(element);
  };
  return editor;
};
