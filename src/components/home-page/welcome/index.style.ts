import styled from 'styled-components';

import { Avatar as Avatar95 } from 'react95';
import { RowWrapper, vars } from 'global/reusable';

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

    a::after {
        background-color: #737373;
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

        &.in-progress {
            &::before {
                content: '';

                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);

                width: 100%;
                height: 2px;

                background-color: black;
                opacity: 0.5;
            }

            &::after {
                opacity: 0.25;
            }
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
        p:first-child {
            max-width: 290px;
            margin-left: auto;
            margin-right: auto;
        }
    }

    @media (max-width: ${vars.size.xs}) {
        margin-top: 16px;

        p:not(:last-child){
            margin-bottom: 6px;
        }
    }
`;