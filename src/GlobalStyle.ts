import { createGlobalStyle } from 'styled-components';
import { BLACK, MAIN_COLOR, WHITE } from './Constants/colors';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${BLACK};
    background: ${WHITE};
    font-family: 'Inter', sans-serif;
  }

  a {
    color: ${MAIN_COLOR};
    text-decoration: none
  }

  button {
    border: 4px solid ${MAIN_COLOR};
    background: transparent;
    padding: 5px 20px;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 14px;
    cursor: pointer;

    @media screen and (max-width: 800px) {
      padding: 5px;
  }
}

`;

export default GlobalStyle;
