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
        title: 'Freelance',
        stack: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Styled-components'],
        description: 'I gained my first experience as a freelance developer. I managed to practice with a lot of technologies. I was involved in a variety of tasks: starting from fixing bugs in CSS to refactoring the code of online shops from scratch using TypeScript + React.',
        startDate: getDateLocalString('2021-06-21'),
    },
    {
        title: 'Linkiiie.ru',
        stack: ['JavaScript', 'SCSS', 'GitHub', 'Figma'],
        description: 'I was involved in the development of a startup for aggregating links to useful tutorials. Specifically, I was engaged in code reviews and frontend development based on Figma designs. I managed to gain teamwork experience through close interaction with backend developers.',
        startDate: getDateLocalString('2021-12-19'),
        endDate: getDateLocalString('2022-07-13')
    },
    {
        title: 'DESC-Studio.ru',
        stack: ['HTML', 'CSS', 'SCSS (+modules)', 'JavaScript', 'TypeScript', 'React', 'GitHub'],
        description: 'I was part of an outsourced web development team. My responsibilities varied by projects: participating in code reviews, frontend development based on Figma designs (using React + TypeScript), and email layouts for mailings. I was interacting with designers, teamleader and backend developers. I managed to consolidate my knowledge of React, JavaScript and TypeScript, as well as gain experience with multilingual websites.',
        startDate: getDateLocalString('2022-08-22'),
        endDate: getDateLocalString('2023-06-27')
    },
    {
        title: 'QChart.io',
        stack: ['TypeScript', 'React', 'Styled-Components', 'WebSockets', 'GitHub', 'Figma'],
        description: 'I managed to participate in the frontend development of a stock analytics startup. The project was written in React with the backend based on Nest.js with data aggregation over WebSockets. I was able to build the frontend using a combination of React + TypeScript + Zustand and participate in a lot of code reviews.',
        startDate: getDateLocalString('2022-11-09'),
        endDate: getDateLocalString('2023-01-10')
    },
    {
        title: 'Slex.io | Slavi.io',
        stack: ['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'React', 'Styled-components'],
        description: 'I was actively involved in the frontend development of two projects: a cryptocurrency wallet and a stock exchange based on Next.js + TypeScript. The project allowed me to reveal my skills in a variety of tasks: from component layout to working with a large number of factories processing APIs. I was constantly participating in code reviews on GitLab.',
        startDate: getDateLocalString('2023-08-18'),
        endDate: getDateLocalString('2025-06-16')
    }
];

function ExperienceModule() {
    return (
        <S.ExperienceModule>
            {
                experienceRows.map(({title, startDate, endDate, stack, description}) => (
                    (
                        <S.ExperienceRow>
                            <S.ExperienceTitle>
                                • {title} — {!endDate && 'since '}{startDate}{endDate && ' to ' + endDate}
                            </S.ExperienceTitle>
                            <S.ExperienceStack>
                                <S.DisableDot>•</S.DisableDot>
                                {' '}
                                {stack.join(', ') + '.'}
                            </S.ExperienceStack>
                            <S.ExperienceDescription>
                                <S.DisableDot>•</S.DisableDot>
                                {' '}
                                {description}
                            </S.ExperienceDescription>
                        </S.ExperienceRow>
                    )
                ))
            }
        </S.ExperienceModule>
    );
}

export { ExperienceModule };