import KnowledgesTableRaw from 'components/knowledges-table';
import { Frame } from 'react95';

import styled from 'styled-components';
import { size } from 'variables';

export const WelcomeModule = styled.div`
    display: flex;
    gap: 12px;

    @media (max-width: ${size.prmd}) {
        flex-direction: column;
    }
`;

export const ImageFramed = styled(Frame)`
    min-width: 386px;
    width: min-content;
    padding: 2px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    img {
        width: 100%;
    }

    @media (max-width: ${size.prmd}) {
        min-width: 300px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (max-width: ${size.sm}) {
        min-width: 250px;
    }
`;

export const WelcomeModuleContentColumn = styled.div`
    display: grid;
    justify-content: space-between;
    gap: 15px;

    @media (min-width: ${size.prmd}) {
        max-height: 386px;
    }

    @media (max-width: ${size.prmd}) {
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const WelcomeTopText = styled.h1`
    font-size: var(--title-size);

    @media (max-width: ${size.prmd}) {
        text-align: center;
    }
`;

export const WelcomeBottomText = styled.p`
    font-size: var(--description-size);

    @media (max-width: ${size.prmd}) {
        text-align: center;
    }
`;

export const KnowledgesTable = styled(KnowledgesTableRaw)`
    height: 100%;
`;