import { useTranslation } from 'react-i18next';
import { getDateLocalString } from 'helpers/date-constructor';

import * as S from './index.styles';

interface IExperienceRow {
    title: string;
    stack: string[];
    description: string;
    startDate: string;
    endDate?: string;
}

const experienceRows: IExperienceRow[] = [
    {
        title: 'experienceFreelanceTitle',
        stack: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Styled-components'],
        description: 'experienceFreelanceDescription',
        startDate: getDateLocalString('2021-06-21'),
    },
    {
        title: 'experienceLinkiiieTitle',
        stack: ['JavaScript', 'SCSS', 'GitHub', 'Figma'],
        description: 'experienceLinkiiieDescription',
        startDate: getDateLocalString('2021-12-19'),
        endDate: getDateLocalString('2022-07-13')
    },
    {
        title: 'experienceDESCTitle',
        stack: ['HTML', 'CSS', 'SCSS (+modules)', 'JavaScript', 'TypeScript', 'React', 'GitHub'],
        description: 'experienceDESCDescription',
        startDate: getDateLocalString('2022-08-22'),
        endDate: getDateLocalString('2023-06-27')
    },
    {
        title: 'experienceQChartTitle',
        stack: ['TypeScript', 'React', 'Styled-Components', 'WebSockets', 'GitHub', 'Figma'],
        description: 'experienceQChartDescription',
        startDate: getDateLocalString('2022-11-09'),
        endDate: getDateLocalString('2023-01-10')
    },
    {
        title: 'experienceSlexTitle',
        stack: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Styled-components'],
        description: 'experienceSlexDescription',
        startDate: getDateLocalString('2023-08-18'),
        endDate: getDateLocalString('2025-06-16')
    }
];

function ExperienceModule() {
    const { t } = useTranslation();

    return (
        <S.ExperienceModule>
            {
                experienceRows.map(({title, startDate, endDate, stack, description}, rowIndex) => (
                    (
                        <S.ExperienceRow
                            key={rowIndex}
                        >
                            <S.ExperienceTitle>
                                • {t(title)} — {!endDate && t('experienceSince') + ' '}{startDate}{endDate && ' ' + t('experienceTo') + ' ' + endDate}
                            </S.ExperienceTitle>
                            <S.ExperienceStack>
                                <S.DisableDot>•</S.DisableDot>
                                {' '}
                                {t('experienceStack') + ': ' + stack.join(', ') + '.'}
                            </S.ExperienceStack>
                            <S.ExperienceDescription>
                                <S.DisableDot>•</S.DisableDot>
                                {' '}
                                {t(description)}
                            </S.ExperienceDescription>
                        </S.ExperienceRow>
                    )
                ))
            }
        </S.ExperienceModule>
    );
}

export { ExperienceModule };