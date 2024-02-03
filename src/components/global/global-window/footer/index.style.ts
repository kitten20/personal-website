import styled from 'styled-components';

import { RowWrapper, vars } from 'global/reusable';

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
        font-size: var(--subname-size);
        background-color: #c3c7cb;
        text-align: center;

        display: table;

        margin: 0 auto;
        padding: 0 10px;

        @media (max-width: ${vars.size.sm}) {
            padding: 0 5px;

            span {
                display: block;
            }
        }
    }
`;

export const RightVersion = styled.p`
    display: block;
    
    text-align: right;
    font-size: var(--description-size);

    margin-top: 4px;

    @media (max-width: ${vars.size.sm}) {
        text-align: center;

        margin-top: 8px;

        a {
            display: inline-grid;
        }
    }
`;