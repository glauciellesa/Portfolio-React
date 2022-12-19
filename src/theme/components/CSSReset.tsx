import { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: red;
  }
  
`;

export default CSSReset;
