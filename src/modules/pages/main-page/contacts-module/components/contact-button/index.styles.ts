import { Button } from 'react95';

import styled from 'styled-components';
import { size } from 'variables';

export const ContactsButtonLinkLayer = styled.a`
    width: 70px;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
        display: none;
    }

    @media (max-width: ${size.sm}) {
        width: 55px;
        height: 55px;
    }
`;

export const ContactButton = styled(Button)`
    padding: 10px;
    width: 100%;
    height: 100%;

    &:active {
        padding: inherit;

        img {
            filter: blur(1px);
        }
    }

    img {
        height: 50px;
        width: 50px;
    }

    @media (max-width: ${size.sm}) {
        img {
            width: 100%;
            height: 100%;
        }
    }
`;