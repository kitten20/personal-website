import {
    Table as TableRaw,
    TableHead as TableHeadRaw,
    TableHeadCell as TableHeadCellRaw,
    TableRow as TableRowRaw,
    TableBody as TableBodyRaw,
    TableDataCell as TableDataCellRaw
} from 'react95';

import styled from 'styled-components';
import { size } from 'variables';

// react95 adds useless garbage that breaks my "height rubbing"
export const TableWrapper = styled.div`
    @media (min-width: ${size.prmd}) {
        &, & > div {
            height: 100%;
            overflow: auto;
        }   
    }
`;

export const Table = styled(TableRaw)`
    height: 100%;

    display: flex;
    flex-direction: column;

    * {
        font-weight: bold;
        font-size: var(--sub-size);
    }
`;

export const TableRow = styled(TableRowRaw)`
    width: 100%;

    display: flex;
`;

export const TableHeadCell = styled(TableHeadCellRaw)`
    &:first-child {
        width: 12.5%;
    }

    &:nth-child(2) {
        width: 43.75%;
    }

    &:last-child {
        width: 43.75%;
        padding-right: 26px;
        
        @media (max-width: ${size.prmd}) {
            padding-right: 8px;
        }
    }

    @media (max-width: ${size.prmd}) {
        &:first-child {
            width: 25%;
        }

        &:nth-child(2), &:last-child {
            width: 37.5%;
        }
    }
`;

export const TableHead = styled(TableHeadRaw)`
    display: flex;

    tr {
        display: contents;
    }
`;

export const TableBody = styled(TableBodyRaw)`
    height: 100%;
    padding: 5px 0;

    display: flex;
    flex-direction: column;
    gap: 5px;

    @media (max-width: ${size.prmd}) {
        overflow: visible;
    }
`;

export const TableDataCell = styled(TableDataCellRaw)`
    text-align: center;

    &:first-child {
        width: 12.5%;
    }

    &:nth-child(2), &:last-child {
        width: 43.75%;
    }

    @media (max-width: ${size.prmd}) {
        &:first-child {
            width: 25%;
        }

        &:nth-child(2), &:last-child {
            width: 37.5%;
        }
    }
`;

export const TableDataCellIcon = styled.img`
    width: 35px;
`;