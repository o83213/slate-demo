import React, { useCallback, useMemo } from "react";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import {
  createEditor,
  Element as SlateElement,
  Text as SlateText,
} from "slate";
import { isHotkey } from "is-hotkey";
import { withHistory } from "slate-history";

import { Toolbar } from "./BaseComponents";
import { defaultValue } from "../data/defaultValue";
import { plainTextHelper } from "../plugins/helpers/plainTextHelper";
import { toggleMark } from "../plugins/helpers/toggleMark";
import CustomElement from "./Custom/CustomElement";
import CustomLeaf from "./Custom/CustomLeaf";

import BlockButton from "./Button/BlockButton";
import MarkButton from "./Button/MarkButton";
interface HotKeyType {
  [key: string]: string;
}
const HOTKEYS: HotKeyType = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

interface ElementProps {
  attributes: any;
  children: React.ReactNode;
  element: SlateElement;
}

interface LeafProps {
  attributes: any;
  children: React.ReactNode;
  leaf: SlateText;
}
const RichTextExample = () => {
  const renderElement = useCallback(
    (props: ElementProps) => <CustomElement {...props} />,
    []
  );
  const renderLeaf = useCallback(
    (props: LeafProps) => <CustomLeaf {...props} />,
    []
  );
  const editor = useMemo(() => {
    return withHistory(withReact(createEditor()));
  }, []);
  const initialValue = useMemo(() => {
    const localStorageContent = localStorage.getItem("content");
    const data = localStorageContent
      ? JSON.parse(localStorageContent)
      : defaultValue;
    return data;
  }, []);
  return (
    <Slate
      editor={editor}
      value={initialValue}
      onChange={(value) => {
        const isAstChange = editor.operations.some(
          (op) => op.type !== "set_selection"
        );
        if (isAstChange) {
          const content = JSON.stringify(value);
          localStorage.setItem("content", content);
        }
      }}
    >
      <Toolbar>
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="italic" icon="format_italic" />
        <MarkButton format="underline" icon="format_underlined" />
        <MarkButton format="code" icon="code" />
        <BlockButton format="heading-one" icon="looks_one" />
        <BlockButton format="heading-two" icon="looks_two" />
        <BlockButton format="block-quote" icon="format_quote" />
        <BlockButton format="numbered-list" icon="format_list_numbered" />
        <BlockButton format="bulleted-list" icon="format_list_bulleted" />
        <BlockButton format="left" icon="format_align_left" />
        <BlockButton format="center" icon="format_align_center" />
        <BlockButton format="right" icon="format_align_right" />
        <BlockButton format="justify" icon="format_align_justify" />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey];
              toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
};

export default RichTextExample;
