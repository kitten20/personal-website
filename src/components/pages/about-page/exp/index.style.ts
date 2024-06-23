import { RowWrapper } from 'global/reusable';
import { Frame } from 'react95';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Exp = styled(RowWrapper)``;

export const ExpLinkHome = styled(Link)`
    font-size: var(--description-size);

    display: table;

    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
`;

export const ExpTitle = styled.p`
    text-transform: capitalize;
    font-size: var(--title-size);
    text-align: center;

    margin-bottom: 7px;
`;

export const ExpFrame = styled(Frame)`
    background-color: black;

    width: 100%;
    padding: 15px 5px;

    * {
        color: white;
    }

    p {
        font-size: var(--description-size);

        &:not(:last-child){
            margin-bottom: 10px;
        }
    }
`;