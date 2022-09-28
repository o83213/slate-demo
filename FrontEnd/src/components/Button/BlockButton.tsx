import { useSlate } from "slate-react";
import { Button, Icon } from "../BaseComponents";
import { isBlockActive } from "../../plugins/helpers/isBlockActive";
import { toggleBlock } from "../../plugins/helpers/toggleBlock";
import { unwrapLink } from "../../plugins/helpers/unwrapLink";
import { isUrl } from "../../util/isUrl";
import { isImageUrl } from "../../util/isImageUrl";
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];
interface ButtonProps {
  format: string;
  icon: string;
}
const BlockButton = ({ format, icon }: ButtonProps) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
      )}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        if (icon === "link_off") {
          if (isBlockActive(editor, "link")) {
            return unwrapLink(editor);
          }
        }
        if (format === "link") {
          const url = window.prompt("Enter the URL of the link:");
          if (!url || !isUrl(url)) {
            alert("Not a valid input!");
            return;
          }
          return toggleBlock(editor, format, url);
        }
        if (format === "image") {
          const url = window.prompt("Enter the URL of the image:");
          if (!url || !isImageUrl(url)) {
            alert("Not a valid input!");
            return;
          }
          return toggleBlock(editor, format, url);
        }
        if (format === "embed") {
          const url = window.prompt("Enter the URL of the image:");
          // if (!url || !isImageUrl(url)) {
          if (!url) {
            alert("Not a valid input!");
            return;
          }
          return toggleBlock(editor, format, url);
        }
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
// 插入嵌入網站標籤
// export const EmbedButton = () => {
//   const editor = useSlateStatic();
//   return (
//     <Button
//       data-title={"嵌入連結"}
//       onMouseDown={(event) => {
//         event.preventDefault();
//         CustomEditor.embed(editor);
//       }}
//     >
//       <BlockIcon>label_important_outline</BlockIcon>
//     </Button>
//   );
// };
export default BlockButton;
