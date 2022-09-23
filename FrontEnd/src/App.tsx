import React from "react";
import RichTextExample from "./components/Editor";
import { css } from "@emotion/css";
const App = () => {
  return (
    <div
      className={css`
        border: 0.1rem solid black;
        background: rgb(255, 255, 255);
        max-width: 42em;
        margin: 20px auto;
        padding: 20px;
      `}
    >
      <RichTextExample />
    </div>
  );
};

export default App;