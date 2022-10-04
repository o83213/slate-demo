import React, { useMemo, useState } from "react";
import AnchorItem from "./AnchorItem";
type Props = {
  children?: React.ReactNode;
  listData: string[];
};
import { css } from "@emotion/css";
const AnchorList = ({ listData }: Props) => {
  return (
    <div
      className={css`
        position: fixed;
        top: 0;
        left: 0;
        border: 0.1rem solid black;
      `}
    >
      {listData.map((id) => (
        <AnchorItem key={id} targetId={id} />
      ))}
    </div>
  );
};
export default AnchorList;
