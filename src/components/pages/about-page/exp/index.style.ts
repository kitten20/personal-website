import { RowWrapper, LinkAnchor } from 'global/reusable';
// import { Frame } from 'react95';

import styled from 'styled-components';

export const Exp = styled(RowWrapper)``;

export const ExpLinkHome = styled(LinkAnchor)`
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

// export const ExpFrame = styled(Frame)`
export const ExpFrame = styled.div`
    background-color: black;
    border-bottom: 2px dashed var(--light-blue-color);

    width: 100%;
    /* padding: 15px 5px; */
    padding-bottom: 15px;
    margin-bottom: 15px;

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

export const ExpSpanLeft = styled.span`
    color: var(--light-blue-color) !important;
`;