import { Frame } from 'react95';

import styled from 'styled-components';

export const LoadingCover = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: calc(100% - 8px);
    height: calc(100% - 8px);
    padding: 4px;

    background-color: #c6c6c6;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoadingPercentRow = styled.p`
    color: white;
    font-size: var(--description-size);
`;

export const ProgressBarWrapper = styled(Frame).attrs({ variant: 'field' })`
    font-size: var(--description-size);
    font-weight: bold;
    text-align: center;

    width: 80%;
    height: 38px;
    margin: 0 auto;

    position: relative;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProgressBarBackground = styled.div`
    background-color: #060084;

    height: calc(100% - 4px);

    position: absolute;
    top: 2px;
    left: 2px;
    z-index: -1;
`;

export const ProgressTopText = styled.p`
    font-size: var(--sub-size);

    width: 80%;
    margin: 0 auto;

    &::after {
        content: '';
        animation: loading-dots 1.5s infinite;
    }

    @keyframes loading-dots {
            0% { content: ''; }
            25% { content: '.'; }
            50% { content: '..'; }
            75% { content: '...'; }
            100% { content: ''; }
        }
`;