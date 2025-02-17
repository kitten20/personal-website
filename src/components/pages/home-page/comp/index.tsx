import { hooks } from 'global/reusable';

import Exp from './exp';

import * as S from './index.style';

interface IW {
    type: string;
    date: string;
    skills: string;
    description: string;
}

const CompBlock = ({ w }: { w: IW }) => {
    return (
        <S.CompBlock>
            <p>• {w.type} — {w.date}</p>
            <p style={{ color: 'var(--light-blue-color)' }}>Stack: {w.skills}.</p>
            <p>{w.description}</p>
        </S.CompBlock>
    );
};

export function Comp() {
    const { t } = hooks.useTranslates(),
        w = t.worked;

    return (
        <S.Comp id="skills">
            <S.DescriptionLinkAbout>{t.homeAboutMe}</S.DescriptionLinkAbout>
            <S.CompFrame>
                <Exp />
                <CompBlock w={w.freelance} />
                <CompBlock w={w.linkiiie} />
                <CompBlock w={w.desc} />
                <CompBlock w={w.qchart} />
                <CompBlock w={w.slex} />
            </S.CompFrame>
        </S.Comp>
    );
}