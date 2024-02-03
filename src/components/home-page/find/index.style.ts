import styled from 'styled-components';

import { RowWrapper, vars } from 'global/reusable';

export const Find = styled(RowWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${vars.size.md}) {
        margin-top: 16px;

        border-top: 2px dashed black;

        p {
            padding-top: 12px;
        }
    }

    @media (max-width: ${vars.size.sm}) {
        margin-top: 12px;

        border-top: 2px dashed black;

        p {
            padding-top: 8px;
        }
    }
`;

export const FindTitle = styled.p`
    text-transform: capitalize;
    font-size: var(--title-size);
`;

export const FindSocials = styled.div`
    display: flex;
    justify-content: center;

    margin: 20px 0 40px;

    a {
        width: 80px;

        &::after {
            display: none;
        }

        &:not(:last-child){
            margin-right: 40px;
        }

        img {
            width: 100%;
        }
    }

    @media (max-width: ${vars.size.md}) {
        margin: 20px 0;
    }

    @media (max-width: ${vars.size.prmd}) {
        a {
            width: 60px;
        }
    }

    @media (max-width: ${vars.size.sm}) {
        a {
            width: 45px;

                &:not(:last-child){
                    margin-right: 30px;
                }
        }
    }

    @media (max-width: ${vars.size.xs}) {
        margin: 12px 0;

        a {
            width: 40px;

                &:not(:last-child){
                    margin-right: 20px;
                }
        }
    }
`;