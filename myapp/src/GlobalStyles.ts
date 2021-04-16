import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Open Sans', sans-serif;
  }

  input, button, textarea {
    font-family: 'Open Sans', sans-serif;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #2e2e2e;
    -webkit-border-radius: 0px;
  }
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  ::-webkit-scrollbar-thumb:vertical {
    -webkit-border-radius: 0px;
    background: #2e2e2e;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    -webkit-border-radius: 0px;
    background: #2e2e2e;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #CCC
  }
  ::-webkit-scrollbar:hover {
    background-color: #CCC;
  }
  ::-webkit-scrollbar-thumb:vertical {
    background: #2e2e2e;
  }
  body {
    display: block;
    padding: 0px;
    margin: 0px;
    background: #24292E;
    overflow-x: hidden;
    overflow-y: auto;
  }
`

export default GlobalStyle;