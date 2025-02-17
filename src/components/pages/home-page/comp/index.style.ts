import { RowWrapper } from 'global/reusable';
import { Frame } from 'react95';

import styled from 'styled-components';

import { vars } from 'global/reusable';

export const Comp = styled(RowWrapper)`
    display: flex;
    flex-direction: column;
`;

export const CompTitle = styled.p`
    font-size: var(--title-size);
    text-align: center;
    text-transform: capitalize;

    margin: 7px 0 10px;
`;

export const CompFrame = styled(Frame)`
    background-color: black;

    width: 100%;
    padding: 15px 20px;
    margin-bottom: 10px;

    * {
        color: white;
    }

    @media (max-width: ${vars.size.md}) {
        padding: 15px 7px;
    }
`;

export const CompBlock = styled.div`
    &:last-child p:last-child {
            margin-bottom: 0;
    }

    p {
        font-size: var(--subname-size);

        &:not(:first-child) {
            text-indent: 22px;
        }

        &:first-child {
            margin-bottom: 5px;
        }

        &:last-child {
            font-size: var(--description-size);
            text-align: justify;

            margin: 5px 0 25px;
        }
    }
`;

export const DescriptionLinkAbout = styled.p`
    color: white;
    line-height: normal;
    border: 2px solid white;
    text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);
    text-align: center;
    text-transform: uppercase;
    font-size: calc(var(--title-size) - 1px);
    animation: animateBg 5s linear infinite;
    background-image: linear-gradient(90deg,#b00997,#e3216b,#f9601e,#ffb412,#ffd82d,#b9dd17,#41a03c,#1336b4,#741b9d,#b00997,#e3216b);
    background-size: 1000% 100%;

    margin: 0 auto 10px;
    padding: 6px;

    display: inline-block;

    user-select: none;

    @keyframes animateBg {
        0% { background-position: 100% 0%; }
        100% { background-position: 0% 0%; }
     }

    &::after {
        display: none;
    }

    @media (max-width: ${vars.size.prmd}) {
        background-image: none;
        background-size: 100% 100%;
        background: linear-gradient(to left,#b00997,#e3216b,#f9601e,#ffb412,#ffd82d,#b9dd17,#41a03c,#1336b4,#741b9d,#b00997,#e3216b);
     }
`;