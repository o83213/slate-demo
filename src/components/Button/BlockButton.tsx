import { useSlate } from "slate-react";
import { Button, Icon } from "../BaseComponents";
import { isBlockActive } from "../../plugins/helpers/isBlockActive";
import { toggleBlock } from "../../plugins/helpers/toggleBlock";
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];
const BlockButton = ({ format, icon }: any) => {
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
        toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
export default BlockButton;
