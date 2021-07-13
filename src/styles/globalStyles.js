import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0 0;
    padding: 0 0;
  }
  
  html {
    width: 100%;
    min-height: 100%;
  }
  
  body {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  #root {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
   
`;
 
export default GlobalStyle;