import { getDateFullYear } from 'helpers/date-constructor';

import * as S from './index.styles';

export interface IKnowledgesRowProp {
    imgSrc: string;
    name: string;
    experienceSince: number;
}

const currentYear = getDateFullYear();

function KnowledgesTable({ rows }: { rows: IKnowledgesRowProp[] }) {
    return (
        <S.TableWrapper>
            <S.Table>
                <S.TableHead>
                    <S.TableRow>
                        <S.TableHeadCell>Type</S.TableHeadCell>
                        <S.TableHeadCell>Name</S.TableHeadCell>
                        <S.TableHeadCell>Level</S.TableHeadCell>
                    </S.TableRow>
                </S.TableHead>
                <S.TableBody>
                    {rows.map((row, rowIndex) => (
                        <S.TableRow
                            key={rowIndex}
                        >
                            <S.TableDataCell>
                                <S.TableDataCellIcon
                                    src={row.imgSrc} alt={row.imgSrc} draggable={false}
                                />
                            </S.TableDataCell>
                            <S.TableDataCell>{row.name}</S.TableDataCell>
                            <S.TableDataCell>{currentYear - row.experienceSince}+ years</S.TableDataCell>
                        </S.TableRow>
                    ))}
                </S.TableBody>
            </S.Table>
        </S.TableWrapper>
    );
}

export { KnowledgesTable };