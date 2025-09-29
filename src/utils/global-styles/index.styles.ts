import { createGlobalStyle } from 'styled-components';
import { styleReset } from 'react95';

import fontsDefault from './fonts.styles';
import { size } from 'variables';

const GlobalStyles = createGlobalStyle`
    ${styleReset} ${fontsDefault}

    #root {
        display: grid;
        place-items: center;
        min-height: 100dvh;
        min-width: 100dvw;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: black;

        margin: 0;

        overflow: hidden;
    }

    :root {
        --title-size: 27px;
        --sub-size: 18px;
        --description-size: 18px;
        --link-color: #0010d1;
        --light-blue-color: #1dffdc;
    }

    * {
        font-family: 'ms_sans_serif', 'ms_sans_serif_rus' !important;

        &::selection {
            background-color: #060084;

            color: white;
        }

        @media (max-width: ${size.prmd}) {
            &::-webkit-scrollbar {
                width: 13px !important;
            }

            &::-webkit-scrollbar-button {
                display: none !important;
            }
        }
    }

    p, a, h1, h2  {
        font-weight: bold;
        color: black;
        letter-spacing: 1px;
    }

    a {
        position: relative;

        color: var(--link-color);

        &::after {
            content: '';

            position: absolute;
            bottom: -3px;
            left: 0;

            width: 100%;
            height: 2px;

            background-color: var(--link-color);
        }
    }

    @media(max-width: ${size.md}) {
        :root {
            --title-size: 22px;
            --sub-size: 16px;
        }
    }

    @media (max-width: ${size.prmd}) {
        :root {
            --title-size: 19px;
            --description-size: 15px;
        }
    }

    @media (max-width: ${size.sm}) {
        :root {
            --title-size: 17px;
            --sub-size: 13px;
            --description-size: 13px;
        }
    }
`;

export default GlobalStyles;