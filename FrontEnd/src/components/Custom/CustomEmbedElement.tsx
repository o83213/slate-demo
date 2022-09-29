import { Button, Icon } from "../BaseComponents";
import { Transforms } from "slate";
import {
  useSlateStatic,
  ReactEditor,
  useSelected,
  useFocused,
} from "slate-react";
import { css } from "@emotion/css";
import "./instagram.css";
const CustomEmbedElement = (props: any) => {
  const { attributes, children, element } = props;
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);
  const selected = useSelected();
  const focused = useFocused();
  const { url } = element;
  console.log(element);
  console.log(element.url);
  return (
    <div {...attributes}>
      {children}
      <div
        contentEditable={false}
        className={css`
          position: relative;
        `}
      >
        <Button
          active
          onClick={() => Transforms.removeNodes(editor, { at: path })}
          className={css`
            display: "inline";
            position: absolute;
            top: 0.5em;
            left: 0.5em;
            background-color: white;
          `}
        >
          <Icon>delete</Icon>
        </Button>
        <blockquote
          // className="instagram-media"
          className="instagram-media ig"
          data-instgrm-captioned
          data-instgrm-permalink={`https://www.instagram.com/${url}/?utm_source=ig_embed&amp;utm_campaign=loading`}
          data-instgrm-version="14"
        ></blockquote>
      </div>
    </div>
  );
};

export default CustomEmbedElement;
