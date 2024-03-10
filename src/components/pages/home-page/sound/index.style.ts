import styled from 'styled-components';

import { Frame } from 'react95';

import { RowWrapper, vars } from 'global/reusable';

export const Sound = styled(RowWrapper)`
    text-align: center;

    margin-bottom: 8px;
`;

export const SoundTitle = styled.p`
    text-transform: capitalize;
    font-size: var(--title-size);

    margin-bottom: 20px;

    @media (max-width: ${vars.size.xs}) {
        margin-bottom: 12px;
    }
`;

export const SoundFrame = styled(Frame)`
    width: 100%;
    height: 520px;

    padding: 2px;

    background-color: #e5e5e5;

    @media (max-width: ${vars.size.prmd}) {
        height: 380px;
    }
`;

export const SoundIFrame = styled.iframe`
    width: 100%;
    height: 100%;

    div {
        border-radius: 0 !important;
    }
`;