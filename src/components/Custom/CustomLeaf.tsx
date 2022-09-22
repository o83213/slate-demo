import { css } from "@emotion/css";
import { Text as SlateText } from "slate";
interface LeafProps {
  attributes: any;
  children: React.ReactNode;
  leaf: SlateText;
}
const CustomLeaf = ({ attributes, children, leaf }: LeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = (
      <code
        className={css`
          background-color: #eee;
          padding: 3px;
        `}
      >
        {children}
      </code>
    );
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
export default CustomLeaf;
