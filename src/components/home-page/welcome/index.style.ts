import styled from 'styled-components';

import { Avatar as Avatar95 } from 'react95';
import { RowWrapper } from 'global/reusable';

export const Welcome = styled(RowWrapper)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const WelcomeColumn = styled.div``;

export const Avatar = styled(Avatar95)`
    width: 390px;
    height: 390px;
    margin-right: 12px;
`;

export const TitleWelcome = styled.p`
    font-size: 30px;
`;

export const TitleTopWrapper = styled.div`
    margin-bottom: 33px;
`;

export const TitleTopLinks = styled.div`
    margin-top: 6px;

    display: flex;

    * {
        color: #737373;
        font-size: 20px;

        &:not(:first-child) {
            margin-left: 10px;
        }
    }

    a::after {
        background-color: #737373;
    }
`;

export const DescriptionContainer = styled.div`
    margin-top: 15px;

    p, a {
        font-size: 18px;
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
`;