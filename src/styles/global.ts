import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0 auto;
    font-size: 30px;
    font-family: 'Manrope';
    background: #f4e186a1;
    z-index: -2;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: black;
    text-decoration: none;
  }

  li,
  ul {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;
