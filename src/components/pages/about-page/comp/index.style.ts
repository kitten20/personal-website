import { RowWrapper } from 'global/reusable';
import { Frame } from 'react95';

import styled from 'styled-components';

import { vars } from 'global/reusable';

export const Comp = styled(RowWrapper)``;

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