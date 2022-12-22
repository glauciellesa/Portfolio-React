import { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
  /* Reset */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
  }
  body {
   /*  font-family: 'Montserrat', sans-serif; */
   overflow-x: hidden;
  }
  
`;

export default CSSReset;
