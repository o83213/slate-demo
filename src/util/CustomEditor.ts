import { Editor, Text, Transforms, Element, Node } from "slate";
export const CustomEditor = {
  isBoldMarkActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n: any) => n.type === true,
      universal: true,
    });
    return !!match;
  },
  isCodeBlockActive(editor: Editor) {
    const [match] = Editor.nodes(editor, {
      match: (n: any) => n.type === "code",
    });
    return !!match;
  },
  toggleBoldMark(editor: Editor) {
    const isActive = this.isBoldMarkActive(editor);
    Transforms.setNodes<Node>(
      editor,
      { bold: isActive ? undefined : true },
      {
        match: (n: any) => Text.isText(n),
        split: true,
      }
    );
  },
  toggleCodeBlock(editor: Editor) {
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
