import { Button, Icon } from "../BaseComponents";
import { Transforms } from "slate";
import {
  useSlateStatic,
  ReactEditor,
  useSelected,
  useFocused,
} from "slate-react";
import { css } from "@emotion/css";
const CustomEmbedElement = (props: any) => {
  const { attributes, children, element } = props;
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);
  const selected = useSelected();
  const focused = useFocused();
  const { url } = element;
  console.log(element);
  console.log(element.url);
  console.log(
    "刪除後面字串改成embed",
    url.replace("?utm_source=ig_web_copy_link", "embed")
  );
  const instagram_URL = url.replace("?utm_source=ig_web_copy_link", "embed");
  return (
    <div {...attributes}>
      {children}
      <div
        contentEditable={false}
        className={css`
          position: relative;
        `}
      >
        <iframe src={instagram_URL}></iframe>
      </div>
    </div>
  );
};

export default CustomEmbedElement;
