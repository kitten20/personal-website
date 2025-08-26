import { type IRowProp } from 'components/knowledges-table';

import * as S from './index.styles';

import jsIcon from 'assets/table-icons/js-icon.png';
import tsIcon from 'assets/table-icons/ts-icon.png';
import reactIcon from 'assets/table-icons/react-icon.png';
import nextjsIcon from 'assets/table-icons/nextjs-icon.png';
import githubIcon from 'assets/table-icons/github-icon.png';
import gitlabIcon from 'assets/table-icons/gitlab-icon.png';
import scssIcon from 'assets/table-icons/scss-icon.png';
import figmaIcon from 'assets/table-icons/figma-icon.png';

const age = new Date().getFullYear() - new Date('2006-07-31').getFullYear();
const rows: IRowProp[] = [
    {
        imgSrc: jsIcon,
        name: 'JavaScript',
        experienceSince: new Date('2021-06-21').getFullYear()
    },
    {
        imgSrc: reactIcon,
        name: 'React',
        experienceSince: new Date('2022-11-09').getFullYear()
    },
    {
        imgSrc: scssIcon,
        name: 'SCSS',
        experienceSince: new Date('2022-12-19').getFullYear()
    },
    {
        imgSrc: tsIcon,
        name: 'TypeScript',
        experienceSince: new Date('2023-08-18').getFullYear()
    },
    {
        imgSrc: nextjsIcon,
        name: 'Next.js',
        experienceSince: new Date('2023-08-18').getFullYear()
    },
    {
        imgSrc: githubIcon,
        name: 'Github',
        experienceSince: new Date('2021-01-16').getFullYear()
    },
    {
        imgSrc: gitlabIcon,
        name: 'Gitlab',
        experienceSince: new Date('2023-08-18').getFullYear()
    },
    {
        imgSrc: figmaIcon,
        name: 'Figma',
        experienceSince: new Date('2021-02-05').getFullYear()
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
                    An {age}-Year-Old Frontend Developer from Russia, who loves old school computer games, delicious pizza, Breakcore music and JavaScript!
                </S.WelcomeBottomText>
                <S.WelcomeBottomText>
                    Developing projects since 2021.
                </S.WelcomeBottomText>
                <S.KnowledgesTable 
                    {...{rows}} 
                />
            </S.WelcomeModuleContentColumn>
        </S.WelcomeModule>
    );
}

export default WelcomeModule;