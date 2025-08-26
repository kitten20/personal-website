import * as S from './index.styles';

export interface IRowProp {
    imgSrc: string;
    name: string;
    experienceSince: number;
}

const currentYear = new Date().getFullYear();

function KnowledgesTable({ rows }: { rows: IRowProp[] }) {
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
                    {rows.map(row => (
                        <S.TableRow>
                            <S.TableDataCell>
                                <S.TableDataCellIcon
                                    src={row.imgSrc} alt={row.imgSrc}
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

export default KnowledgesTable;