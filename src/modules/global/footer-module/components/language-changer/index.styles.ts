import { Button } from 'react95';

import styled from 'styled-components';
import { size } from 'variables';

export const LanguageChangerButton = styled(Button)`
    padding: 5px 10px !important;
    height: auto;

    display: flex;
    gap: 10px;

    img {
        height: 50px;
    }

    p {
        font-size: var(--sub-size);
    }

    
    @media (max-width: ${size.prmd}) {
        padding: 10px 15px !important;

        img {
            height: 30px;
        }
    }
`;