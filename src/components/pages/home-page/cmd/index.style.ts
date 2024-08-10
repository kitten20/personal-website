import styled from 'styled-components';

import { Frame } from 'react95';
import { RowWrapper, vars } from 'global/reusable';

export const Cmd = styled(RowWrapper)`
    margin-top: 8px;

    @media (max-width: ${vars.size.xs}) {
        margin-bottom: 2px;
    }
`;

export const CmdFrame = styled(Frame)`
    background-color: black;

    width: 100%;
    padding: 30px 4px;
    height: 520px;

    overflow: auto;
    overflow-y: scroll;

    * {
        color: #c4c7c5;
        font-weight: bold;
        font-size: var(--subname-size);
    }

    @media (max-width: ${vars.size.prmd}) {
        height: 380px;
    }

    @media (max-width: ${vars.size.sm}) {
        padding: 12px 4px;
    }
`;