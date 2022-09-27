import { Editor, Transforms, Element, Range } from "slate";
import { wrapLink } from "./wrapLink";
import { isUrl } from "../../util/isUrl";
export const withInlines = (editor: Editor) => {
  const { insertData, insertText, isInline, isVoid } = editor;

  editor.isInline = (element) =>
    ["link", "button"].includes(element.type) || isInline(element);

  // editor.insertText = (text) => {
  //   if (text && isUrl(text)) {
  //     wrapLink(editor, text);
  //   } else {
  //     insertText(text);
  //   }
  // };

  // editor.insertData = (data) => {
  //   console.log("data", data);
  //   const text = data.getData("text/plain");
  //   if (text && isUrl(text)) {
  //     wrapLink(editor, text);
  //   } else {
  //     insertData(data);
  //   }
  // };
  //
  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };
  //
  return editor;
};
