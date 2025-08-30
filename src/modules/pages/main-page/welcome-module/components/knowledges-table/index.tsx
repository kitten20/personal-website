import { useTranslation } from 'react-i18next';
import { getDateFullYear } from 'helpers/date-constructor';

import * as S from './index.styles';

export interface IKnowledgesRowProp {
    imgSrc: string;
    name: string;
    experienceSince: number;
}

const currentYear = getDateFullYear();

function KnowledgesTable({ rows }: { rows: IKnowledgesRowProp[] }) {
    const { t } = useTranslation();

    return (
        <S.TableWrapper>
            <S.Table>
                <S.TableHead>
                    <S.TableRow>
                        <S.TableHeadCell>{t('knowledgesType')}</S.TableHeadCell>
                        <S.TableHeadCell>{t('knowledgesName')}</S.TableHeadCell>
                        <S.TableHeadCell>{t('knowledgesLevel')}</S.TableHeadCell>
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
                            <S.TableDataCell>{t(row.name)}</S.TableDataCell>
                            <S.TableDataCell>{currentYear - row.experienceSince}+ {t('knowledgesYears')}</S.TableDataCell>
                        </S.TableRow>
                    ))}
                </S.TableBody>
            </S.Table>
        </S.TableWrapper>
    );
}

export { KnowledgesTable };