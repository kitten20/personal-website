import { createGlobalStyle } from 'styled-components';

import { styleReset } from 'react95';
import fontsDefault from './fonts.styles';

const GlobalStyles = createGlobalStyle`
    ${styleReset} ${fontsDefault}

    body {
        background-color: black;

        margin: 0;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        height: 100vh;
    }

    * {
        font-family: "ms_sans_serif" !important;
    }

    p, a  {
        font-weight: bold;
        color: black;
        letter-spacing: 1px;
    }

    a {
        position: relative;

        &::after {
            content: '';

            position: absolute;
            bottom: 0;
            left: 0;

            width: 100%;
            height: 2px;

            background-color: black;
        }
    }
`;

export default GlobalStyles;