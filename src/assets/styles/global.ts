import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
padding: 0;
margin: 0;
box-sizing: border-box;
font-family: 'Sora', sans-serif;
}

body {
 font-size: 16px;
 background: ${({ theme }) => theme.background};
    }

button {
  cursor: pointer;
}
`;
