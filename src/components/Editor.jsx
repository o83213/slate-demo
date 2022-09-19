import React, { useState, useCallback, useMemo } from "react";
// Import the Slate editor factory
import { createEditor } from "slate";
// Import the slate components and React plugin
import { Slate, Editable, withReact } from "slate-react";
// Import the custom element
import DefaultElement from "./elements/DefaultElement";
import CodeElement from "./elements/CodeElement";
import BoldTextLeaf from "./elements/BoldTextLeaf";
// Import custom editor helper function
import { CustomEditor } from "../util/CustomEditor";
// helper function to extract plain text
import { plainTextHelper } from "../util/plainTextHelper";
const DemoEditor = (props) => {
  // Create a Slate editor object that won't change across renders
  const [editor] = useState(() => withReact(createEditor()));
  // get the initial value
  const initialValue = useMemo(() => {
    const localStorageContent = localStorage.getItem("content");
    const data = localStorageContent
      ? plainTextHelper.deserialize(localStorageContent)
      : [
          {
            type: "paragraph",
            children: [{ text: "A line of text in a paragraph." }],
          },
        ];
    return data;
  }, []);
  //
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);
  //
  const renderLeaf = useCallback((props) => {
    return <BoldTextLeaf {...props} />;
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
          const content = plainTextHelper.serialize(value);
          localStorage.setItem("content", content);
        }
      }}
    >
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            CustomEditor.toggleBoldMark(editor);
          }}
        >
          Bold!
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            CustomEditor.toggleCodeBlock(editor);
          }}
        >
          Code!
        </button>
      </div>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={(event) => {
          if (!event.ctrlKey) return;
          switch (event.key) {
            case "`":
              event.preventDefault();
              CustomEditor.toggleCodeBlock(editor);
              break;
            case "b":
              event.preventDefault();
              CustomEditor.toggleBoldMark(editor);
              break;
            default:
          }
        }}
      />
    </Slate>
  );
};
export default DemoEditor;
