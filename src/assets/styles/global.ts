import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Sora", sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #e5e5e5;
  }

  button {
    cursor: pointer;
  }

`;
