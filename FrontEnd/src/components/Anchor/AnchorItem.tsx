import { css } from "@emotion/css";
type Props = {
  targetId: string;
};

const AnchorItem = ({ targetId }: Props) => {
  return (
    <div
      className={css`
        height: 30px;
        width: 60px;
        border: 0.1rem solid red;
      `}
    >
      <a href={`#${targetId}`}>{targetId}</a>
    </div>
  );
};
export default AnchorItem;
