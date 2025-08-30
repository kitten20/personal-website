import { Frame } from 'react95';

import styled from 'styled-components';
import { size } from 'variables';

export const ExperienceModule = styled(Frame)`
    width: 100%;
    padding: 15px 20px;

    background-color: black;

    display: grid;
    gap: 25px;

    @media (max-width: ${size.sm}) {
        padding: 15px 10px;
        max-width: 300px;
        margin: 0 auto;
    }
`;

export const ExperienceRow = styled.div`
    display: grid;
    gap: 5px;
`;

export const ExperienceTitle = styled.p`
    color: white;
    font-size: var(--sub-size);
`;

export const ExperienceStack = styled.p`
    color: var(--light-blue-color);
    font-size: var(--sub-size);
`;

export const ExperienceDescription = styled.p`
    color: white;
    font-size: var(--sub-size);
`;

export const DisableDot = styled.span`
    opacity: 0;
    font-size: var(--sub-size) !important;
`;