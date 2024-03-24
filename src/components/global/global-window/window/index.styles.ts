import styled from 'styled-components';

import { Window as WindowReact95, WindowHeader as WindowHeaderReact95, WindowContent as WindowContent95, ScrollView as ScrollView95 } from 'react95';

import { vars } from 'global/reusable';

export const Window = styled(WindowReact95)`
    width: 100%;
    height: calc(100% - 70px);
    max-width: 1482px;
    max-height: 954px;
    padding: 4px;
    margin: 0 20px;

    z-index: 90;
    
    @media (max-width: ${vars.size.md}) {
        height: calc(100% - 20px);
        margin: 0 10px;
    }
`;

export const WindowHeaderStyled = styled(WindowHeaderReact95)`
    text-transform: uppercase;
    letter-spacing: 1px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const WindowHeaderColumn = styled.span`
    display: flex;
    align-items: center;

    a {
        line-height: normal;
        text-decoration-line: none;

        outline: none;
        user-select: none;

        &::after {
            display: none;
        }

        img {
            height: 22px;
            margin-left: 5px;
        }
    }
`;

export const WindowContent = styled(WindowContent95)`
    padding: 0 2px;
    height: calc(100% - 40px);
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
        background: ${({ theme }) => theme.materialText};
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

export const ScrollView = styled(ScrollView95)`
    height: 100%;

    & > div {
        padding: 0;
    }

    @media (max-width: ${vars.size.prmd}) {
        & > div {
            ::-webkit-scrollbar {
                width: 13px;

                &-button {
                    display: none !important;
                }
            }
        }
    }
`;

export const ScrollChild = styled.div`
    max-height: 889px;
    height: 100%;
    
    overflow: auto;
`;