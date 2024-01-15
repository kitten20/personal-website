import styled from 'styled-components';

import { RowWrapper } from 'global/reusable';

export const Footer = styled(RowWrapper)``;

export const LineThrough = styled.div`
    position: relative;
    z-index: 3;

    &::after {
        content: '';

        position: absolute;
        top: 50%;
        left: 0;
        z-index: -1;

        width: 100%;
        height: 2px;

        background-color: black;
    }

    p {
        font-size: 30px;
        background-color: #c3c7cb;

        display: table;

        margin: 0 auto;
        padding: 0 10px;
    }
`;

export const RightVersion = styled.p`
    display: block;
    
    text-align: right;

    margin-top: 4px;
`;