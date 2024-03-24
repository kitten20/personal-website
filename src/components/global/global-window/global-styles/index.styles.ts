import { createGlobalStyle } from 'styled-components';

import { styleReset } from 'react95';
import fontsDefault from './fonts.styles';

import { vars } from 'global/reusable';

const GlobalStyles = createGlobalStyle`
    ${styleReset} ${fontsDefault}

    body {
        background-color: black;

        margin: 0;
        height: ${window.innerHeight}px;
    }

    :root {
        --title-size: 30px;
        --subname-size: 20px;
        --description-size: 18px;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        height: ${window.innerHeight}px;
    }

    * {
        font-family: 'ms_sans_serif', 'ms_sans_serif_rus' !important;
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

    @media(max-width: ${vars.size.md}) {
        :root {
            --title-size: 22px;
            --subname-size: 18px;
            --description-size: 18px;
        }
    }

    @media (max-width: ${vars.size.sm}) {
        :root {
            --title-size: 19px;
            --subname-size: 16px;
            --description-size: 15px;
        }
    }

    @media (max-width: ${vars.size.xs}) {
        :root {
            --title-size: 17px;
            --subname-size: 13px;
            --description-size: 13px;
        }
    }
`;

export default GlobalStyles;