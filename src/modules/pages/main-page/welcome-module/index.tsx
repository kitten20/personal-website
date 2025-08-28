import { getDateFullYear } from 'helpers/date-constructor';

import { type IKnowledgesRowProp } from './components/knowledges-table';

import * as S from './index.styles';

import jsIcon from 'assets/table-icons/js-icon.png';
import tsIcon from 'assets/table-icons/ts-icon.png';
import reactIcon from 'assets/table-icons/react-icon.png';
import nextjsIcon from 'assets/table-icons/nextjs-icon.png';
import githubIcon from 'assets/table-icons/github-icon.png';
import gitlabIcon from 'assets/table-icons/gitlab-icon.png';
import scssIcon from 'assets/table-icons/scss-icon.png';
import figmaIcon from 'assets/table-icons/figma-icon.png';

const age = getDateFullYear() - getDateFullYear('2006-07-31');
const rows: IKnowledgesRowProp[] = [
    {
        imgSrc: jsIcon,
        name: 'JavaScript',
        experienceSince: getDateFullYear('2021-06-21')
    },
    {
        imgSrc: reactIcon,
        name: 'React',
        experienceSince: getDateFullYear('2022-11-09')
    },
    {
        imgSrc: scssIcon,
        name: 'SCSS',
        experienceSince: getDateFullYear('2022-12-19')
    },
    {
        imgSrc: tsIcon,
        name: 'TypeScript',
        experienceSince: getDateFullYear('2023-08-18')
    },
    {
        imgSrc: nextjsIcon,
        name: 'Next.js',
        experienceSince: getDateFullYear('2023-08-18')
    },
    {
        imgSrc: githubIcon,
        name: 'Github',
        experienceSince: getDateFullYear('2021-01-16')
    },
    {
        imgSrc: gitlabIcon,
        name: 'Gitlab',
        experienceSince: getDateFullYear('2023-08-18')
    },
    {
        imgSrc: figmaIcon,
        name: 'Figma',
        experienceSince: getDateFullYear('2021-02-05')
    },
];

function WelcomeModule() {
    return (
        <S.WelcomeModule>
            <S.ImageFramed>
                <img
                    src="avatar-image.png" alt="avatar"
                />
            </S.ImageFramed>
            <S.WelcomeModuleContentColumn>
                <S.WelcomeTopText>
                    Hi, I'm Daniil Ulyanov!
                </S.WelcomeTopText>
                <S.WelcomeBottomText>
                    A {age}-Year-Old Frontend Developer from Russia, who loves old school computer games, delicious pizza, Breakcore music and JavaScript!
                </S.WelcomeBottomText>
                <S.WelcomeBottomText>
                    Developing projects since 2021.
                </S.WelcomeBottomText>
                <S.KnowledgesTable
                    {...{ rows }}
                />
            </S.WelcomeModuleContentColumn>
        </S.WelcomeModule>
    );
}

export { WelcomeModule };