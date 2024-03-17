import { hooks } from 'global/reusable';

import * as S from './index.style';

interface IW {
    type: string;
    date: string;
    skills: string;
    description: string;
}

const CompBlock = ({w}: {w: IW}) => {
    return (
        <S.CompBlock>
            <p>-- {w.type} - {w.date}</p>
            <p>- Stack: {w.skills}</p>
            <p>- {w.description}</p>
        </S.CompBlock>
    );
};

function Comp() {
    const { t } = hooks.useTranslates(),
        w = t.worked;

    return ( 
        <S.Comp>
            <S.CompTitle>{t.aboutWorked}</S.CompTitle>
            <S.CompFrame>
                <CompBlock w={w.freelance} />
                <CompBlock w={w.linkiiie} />
                <CompBlock w={w.desc} />
                <CompBlock w={w.qchart} />
                <CompBlock w={w.slex} />
            </S.CompFrame>
        </S.Comp>
    );
}

export default Comp;