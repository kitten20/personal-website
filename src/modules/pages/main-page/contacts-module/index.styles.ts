import styled from 'styled-components';
import { size } from 'variables';

export const ContactsModule = styled.div`
    display: grid;
    gap: 12px;
    justify-content: center;

    padding: 12px 0;
    margin: 0 auto;

    @media (max-width: ${size.sm}) {
        justify-content: initial;

        max-width: 300px;
        width: 100%;
        padding: 6px 0;
    }
`;

export const ContactsTitle = styled.p`
    font-size: var(--title-size);
    text-transform: capitalize;
    text-align: center;
`;

export const ContactsButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;

    @media (max-width: ${size.sm}) {
        justify-content: space-between;
        gap: 5px;
    }

    @media (max-width: ${size.xs}) {
        justify-content: center;

        max-width: 230px;
        margin: 0 auto;
    }
`;