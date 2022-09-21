import styled from "styled-components";

type ButtonProps = {
  reversed: boolean;
  active: boolean;
};

export const StyledButton = styled.span<ButtonProps>`
  cursor: pointer;
  color: ${(props) =>
    props.reversed
      ? props.active
        ? "white"
        : "#aaa"
      : props.active
      ? "black"
      : "#ccc"};
`;
export const TextLines = styled.div`
  margin: 30px -20px 0;
  &.header {
    font-size: 14px;
    padding: 5px 20px;
    color: #404040;
    border-top: 2px solid #eeeeee;
    background: #f8f8f8;
  }
  &.textContent {
    color: #404040;
    font: 12px monospace;
    white-space: pre-wrap;
    padding: 10px 20px;
  }
`;
export const StyleInstruction = styled.div`
  white-space: pre-wrap;
  margin: 0 -20px 10px;
  padding: 10px 20px;
  font-size: 14px;
  background: #f8f8e8;
`;
export const StyledMenu = styled.div`
  display: inline-block;

  position: relative;
  padding: 1px 18px 17px;
  margin: 0 -20px;
  border-bottom: 2px solid #eee;
  margin-bottom: 20px;
`;
