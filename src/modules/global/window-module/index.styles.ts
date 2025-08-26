import {
    Window as WindowRaw,
    WindowHeader as WindowHeaderRaw,
    WindowContent as WindowContentRaw,
    ScrollView as ScrollViewRaw,
} from 'react95';

import styled from 'styled-components';
import { size } from 'variables';

export const Window = styled(WindowRaw)`
    max-width: 1482px;
    max-height: 954px;
    width: calc(100% - 40px);
    margin: 0 20px;

    @media (max-width: ${size.md}) {
        width: calc(100% - 20px);
        margin: 0 10px;
    }
`;

export const WindowHeader = styled(WindowHeaderRaw)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    * {
        color: white;
    }
`;

export const WindowContent = styled(WindowContentRaw)`
    padding: 0;
    height: calc(100% - 40px);
    max-height: 87.5dvh;        

    overflow: auto;
`;

export const ScrollView = styled(ScrollViewRaw)`
    padding: 0px 2px;

    & > div {
        padding-right: 0;
    }
`;

export const CloseIcon = styled.span`
    display: inline-block;

    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;

    transform: rotateZ(45deg);
    position: relative;

    &:before,
    &:after {
        content: '';
        position: absolute;
        background: ${({ theme }) => (theme as { materialText: string }).materialText};
    }

    &:before {
        height: 100%;
        width: 3px;
        left: 50%;
        transform: translateX(-50%);
    }

    &:after {
        height: 3px;
        width: 100%;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
    }
`;