import styled from 'styled-components';
import { size } from 'variables';

export const FooterModule = styled.footer`
    display: grid;
    gap: 8px;
`;

export const LineThrough = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 2;

    &::after {
        content: '';

        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: -1;

        height: 2px;
        width: 100%;

        background-color: black;
    }
`;

export const LineThroughText = styled.p`
    padding: 0 10px;
    margin: 0 auto;

    background-color: #c6c6c6;
    font-size: var(--description-size);

    display: inline-block;

    @media (max-width: ${size.sm}) {
        padding: 0 5px;
        max-width: 185px;

        text-align: center;
    }
`;

export const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: ${size.sm}) {
        flex-direction: column;
    }
`;

export const FooterVersion = styled.div`
    &, * {
        font-weight: bold;
        font-size: var(--description-size);
    }

    @media (max-width: ${size.sm}) {
        text-align: center;
    }

    @media (max-width: ${size.xs}) {
        display: grid;
        justify-content: center;

        a {
            width: max-content;
            margin: 0 auto;
        }
    }
`;