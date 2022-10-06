import { css } from "@emotion/css";
type Props = {
  name: string;
  targetId: string;
};

const AnchorItem = ({ targetId, name }: Props) => {
  return (
    <div
      className={css`
        height: 30px;
        > a {
          text-decoration: none;
          font-size: 16px;
        }
      `}
    >
      <a href={`#${targetId}`}>{name}</a>
    </div>
  );
};
export default AnchorItem;
