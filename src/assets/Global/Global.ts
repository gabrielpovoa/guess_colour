import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    text-transform: capitalize;
    transition: all .3s linear;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: #FCFCFC;
  }
`;