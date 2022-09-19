import { Editor, Text, Transforms } from "slate";
export const CustomEditor = {
  isBoldMarkActive(editor: any) {
    const [match] = Editor.nodes(editor, {
      match: (n: any) => n.type === true,
      universal: true,
    });
    return !!match;
  },
  isCodeBlockActive(editor: any) {
    const [match] = Editor.nodes(editor, {
      match: (n: any) => n.type === "code",
    });
    return !!match;
  },
  toggleBoldMark(editor: any) {
    const isActive = this.isBoldMarkActive(editor);
    Transforms.setNodes<any>(
      editor,
      { bold: isActive ? null : true },
      {
        match: (n: any) => Text.isText(n),
        split: true,
      }
    );
  },
  toggleCodeBlock(editor: any) {
    const isActive = this.isCodeBlockActive(editor);
    Transforms.setNodes<any>(
      editor,
      { type: isActive ? null : "code" },
      {
        match: (n: any) => Editor.isBlock(editor, n),
      }
    );
  },
};
