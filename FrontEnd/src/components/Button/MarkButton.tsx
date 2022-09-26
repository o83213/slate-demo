import { useSlate } from "slate-react";
import { Button, Icon } from "../BaseComponents";
import { isMarkActive } from "../../plugins/helpers/isMarkActive";
import { toggleMark } from "../../plugins/helpers/toggleMark";
const MarkButton = ({ format, icon }: any) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        console.log(format);
        toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
export default MarkButton;
