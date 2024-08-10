import styled from 'styled-components';

import { Avatar as Avatar95 } from 'react95';
import { RowWrapper, vars, LinkAnchor } from 'global/reusable';

export const Welcome = styled(RowWrapper)`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: ${vars.size.md}) {
        align-items: flex-start;
    }

    @media (max-width: ${vars.size.prmd}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const WelcomeColumn = styled.div`
    @media (max-width: ${vars.size.prmd}) {
        &:first-child {
            justify-content: center;
            display: flex;

            width: 100%;
            margin-bottom: 12px;
        }
    }

    @media (min-width: ${vars.size.prmd}) {
        &:last-child {
            padding-right: 12px;
        }
    }

    @media (max-width: ${vars.size.md}) and (min-width: ${vars.size.prmd}) {
        &:last-child {
            margin-top: 16px;
        }
    }
`;

export const Avatar = styled(Avatar95)`
    width: 390px;
    height: 390px;
    margin-right: 12px;

    @media (max-width: ${vars.size.md}) {
        width: 300px;
        height: 300px;
    }

    @media (max-width: ${vars.size.prmd}) {
        margin: 0 auto;
    }

    @media (max-width: ${vars.size.xs}) {
        width: 250px;
        height: 250px;
    }
`;

export const TitleWelcome = styled.p`
    font-size: var(--title-size);

    @media (max-width: ${vars.size.md}) {
        margin-bottom: 8px;
    }
`;

export const TitleTopWrapper = styled.div`
    margin-bottom: 33px;

    @media (max-width: ${vars.size.md}) {
        margin-bottom: 0;
    }

    @media (max-width: ${vars.size.prmd}) {
        text-align: center;
    }
`;

export const TitleTopLinks = styled.div`
    margin-top: 6px;

    display: flex;

    * {
        color: #737373;
        font-size: var(--subname-size);

        &:not(:first-child) {
            margin-left: 10px;
        }
    }

    a {
        color: var(--link-color);

        &::after {
            bottom: -1px;
        }
    }

    @media (max-width: ${vars.size.md}) {
        flex-direction: column;

        margin-top: 0;

        * {
            &:not(:first-child) {
                margin-left: 0;
                margin-top: 10px;
            }

            &:nth-child(2) {
                margin-top: 4px;
            }
        }
    }

    @media (max-width: ${vars.size.prmd}) {
        text-align: left;

        width: 290px;
        margin-left: auto;
        margin-right: auto;

        p {
            text-align: center;
        }
    }

    @media (max-width: ${vars.size.xs}) {
        width: 100%;

        text-align: center;
    }
`;

export const DescriptionContainer = styled.div`
    margin-top: 15px;

    p, a {
        font-size: var(--description-size);
    }

    p {
        &:not(:last-child){
            margin-bottom: 15px;
        }

        a {
            text-transform: none;
        }
    }

    a {
        text-transform: uppercase;

        &.about-me {
            font-size: calc(var(--description-size) + 5px);
        }

        span {
            text-transform: none;
            font-weight: 400;
        }
    }

    @media (max-width: ${vars.size.md}) {
        margin-top: 24px;
    }

    @media (max-width: ${vars.size.prmd}) {
        p {
            max-width: 290px;
            margin-left: auto;
            margin-right: auto;
        }

        a.about-me {
            font-size: calc(var(--description-size));
        }
    }

    @media (max-width: ${vars.size.xs}) {
        margin-top: 16px;

        p:not(:last-child){
            margin-bottom: 6px;
        }
    }
`;

export const Tabs = styled.div`
    display: flex;
    gap: 4px;
    flex-wrap: wrap;

    margin-top: 15px;

    @media (max-width: ${vars.size.prmd}) {
        align-items: center;
        flex-direction: column;
    }
`;

export const Tab = styled(LinkAnchor)`
    display: flex;
    align-items: center;

    padding-right: 8px;
    box-sizing: border-box;
    
    border: 1px solid white;

    user-select: none;

    &::after {
        display: none;
    }

    p {
        font-size: 14px;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        font-family: 'ms_sans_serif_rus', sans-serif !important;
        color: white;
    }

    img {
        width: 40px;
    }

    @media (max-width: ${vars.size.prmd}) {
        width: 100%;
    }
`;

export const TabSASS = styled(Tab)`
    background-color: #cc6699;
`;

export const TabTS = styled(Tab)`
    background-color: #2d79c7;

    padding: 0 8px;

    img {
        width: 30px;
        margin-right: 6px;

        border: 1px solid white;
        border-radius: 5px;
    }

    @media (max-width: ${vars.size.prmd}) {
        padding: 4px;
    }
`;

export const TabReact = styled(Tab)`
    background-color: white;
    border: 1px solid #80d1e6;

    p {
        color: #007391;
    }

    img {
        animation: rotation 12s linear infinite;

        @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }
`;