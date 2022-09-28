import { Editor, Element, Transforms, Range } from "slate";
import { isBlockActive } from "./isBlockActive";
// import { isLinkActive } from "./isLinkActive";
import { wrapLink } from "./wrapLink";
import { unwrapLink } from "./unwrapLink";
import { insertImage } from "../helpers/insertImage";
import { insertIframe } from "./insertIframe";
const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];
export const toggleBlock = (
  editor: Editor,
  format: string,
  url: string = "https://www.google.com.tw/"
) => {
  console.log("format:", format);
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  // console.log("isActive: ", isActive);
  const isList = LIST_TYPES.includes(format);
  // console.log("isList: ", isList);
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      Element.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  // let newProperties: Partial<Element>;
  let newProperties: any;

  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else if (format === "link") {
    if (editor.selection) {
      wrapLink(editor, url);
    }
  } else if (format === "link_off") {
    if (isBlockActive(editor, "link")) {
      unwrapLink(editor);
    }
  } else if (format === "image") {
    insertImage(editor, url);
  } else if (format === "embed") {
    console.log("insert Embed code");
    insertIframe(editor, url);
  } else {
    let format_type = format as Element["type"];
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format_type,
      // type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  // console.log("newProperties", newProperties);
  Transforms.setNodes<Element>(editor, newProperties);

  if (!isActive && isList) {
    const block = {
      type: format,
      // type: format_type,
      children: [],
    } as Element;
    Transforms.wrapNodes(editor, block);
  }
};
