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

export const DescriptionLinkAbout = styled(LinkAnchor)`
    background: linear-gradient(to left, rgb(176, 9, 151) 0%, rgb(227, 33, 107) 10%, rgb(249, 96, 30) 25%, rgb(255, 180, 18) 40%, rgb(255, 216, 45) 50%, rgb(185, 221, 23) 61%, rgb(65, 160, 60) 75%, rgb(19, 54, 180) 90%, rgb(116, 27, 157) 100%);
    color: white;
    line-height: normal;
    border: 2px solid white;
    text-shadow: 0 1px 0 #CCCCCC, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);

    padding: 6px;

    &::after {
        display: none;
    }
`;