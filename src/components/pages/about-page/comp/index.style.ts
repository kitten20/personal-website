import { RowWrapper } from 'global/reusable';
import { Frame } from 'react95';

import styled from 'styled-components';

export const Comp = styled(RowWrapper)``;

export const CompTitle = styled.p`
    font-size: var(--title-size);
    text-align: center;
    text-transform: capitalize;
`;

export const CompFrame = styled(Frame)`
    background-color: black;

    width: 100%;
    padding: 15px 5px;

    * {
        color: white;
    }
`;

export const CompBlock = styled.div`
    &:last-child p:last-child {
            margin-bottom: 0;
    }

    p {
        font-size: var(--subname-size);

        &:first-child {
            margin-bottom: 5px;
        }

        &:last-child {
            font-size: var(--description-size);

            margin: 5px 0 25px;
        }
    }
`;