import styled from 'styled-components';

import { RowWrapper } from 'global/reusable';

export const Find = styled(RowWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FindTitle = styled.p`
    text-transform: capitalize;
    font-size: 30px;
`;

export const FindSocials = styled.div`
    display: flex;
    justify-content: center;

    margin: 40px 0;

    a {
        width: 80px;

        &::after {
            display: none;
        }

        &:not(:last-child){
            margin-right: 40px;
        }

        img {
            width: 100%;
        }
    }
`;