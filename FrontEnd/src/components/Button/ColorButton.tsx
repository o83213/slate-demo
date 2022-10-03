import { Button, Icon } from "../BaseComponents";
import React, { useState, useEffect } from "react";
import { toggleMark } from "../../plugins/helpers/toggleMark";
import { useSlate } from "slate-react";
import ColorPalte from "./ColorPlate";
import { css } from "@emotion/css";
const StateButton = (props: any) => {
  const { format, icon, defaultState } = props;
  const [color, setColor] = useState<string>();
  const [isChange, setIsChange] = useState(false);
  useEffect(() => {
    setColor(defaultState);
  }, [defaultState]);
  const editor = useSlate();
  const changeColorHandler = (newColor: string) => {
    setColor(newColor);
  };
  return (
    <div>
      <Button
        buttonColor={color}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleMark(editor, format, color);
        }}
      >
        <Icon>{icon}</Icon>
      </Button>
      <Button
        className={css`
          position: relative;
        `}
        onMouseDown={(event) => {
          event.preventDefault();
          setIsChange((prev) => !prev);
        }}
      >
        <Icon>{"arrow_drop_down"}</Icon>
        {isChange && <ColorPalte cb={changeColorHandler} />}
      </Button>
    </div>
  );
};

export default StateButton;
