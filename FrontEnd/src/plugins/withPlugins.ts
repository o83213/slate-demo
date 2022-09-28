import { Editor, Transforms, Element, Range } from "slate";
import { wrapLink } from "./helpers/wrapLink";
import { isUrl } from "../util/isUrl";
export const withPlugins = (editor: Editor) => {
  const { insertData, insertText, isInline, isVoid } = editor;

  editor.isInline = (element) =>
    ["link", "button"].includes(element.type) || isInline(element);
  editor.isVoid = (element) => {
    return ["image", "embed"].includes(element.type) ? true : isVoid(element);
  };
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
  /*
  
  export const withEmbeds = (
    editor: BaseEditor & ReactEditor & HistoryEditor
  ) => {
    const { isVoid } = editor;
    editor.isVoid = (element) =>
      element.type === "embed" ? true : isVoid(element);
    return editor;
  };
  */
  return editor;
};
