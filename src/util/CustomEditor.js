import { Editor, Text, Transforms } from "slate";
export const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === true,
      universal: true,
    });
    return !!match;
  },
  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code",
    });
    return !!match;
  },
  toggleBoldMark(editor) {
    const isActive = this.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      {
        match: (n) => Text.isText(n),
        split: true,
      }
    );
  },
  toggleCodeBlock(editor) {
    const isActive = this.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "code" },
      {
        match: (n) => Editor.isBlock(editor, n),
      }
    );
  },
};
