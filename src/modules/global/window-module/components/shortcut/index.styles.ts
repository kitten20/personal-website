import styled from 'styled-components';

export const ShortCut = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    cursor: pointer;

    text-align: center;

    display: grid;
    justify-content: center;
    gap: 3px;

    padding: 0;

    background-color: transparent;
    border: none;
`;

export const ShortCutIconWrapper = styled.div`
    position: relative;

    width: 70px;
    height: 70px;
    margin: 0 auto;
`;

export const ShortCutIcon = styled.img`
    width: 100%;
`;

export const ShortCutBottomLeftIcon = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 20px;
`;

export const ShortCutText = styled.p`
    font-size: 13px;
    color: white;
    text-align: center;
    font-weight: 400;
    border: 1px solid transparent;

    box-sizing: border-box;

    padding: 5px;
    max-width: 105px;
    width: 100%;
`;