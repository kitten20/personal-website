import { useLocation } from 'react-router-dom';

import { hooks } from 'global/reusable';

import * as S from './index.style';

function Exp() {
    const location = useLocation();

    const {t} = hooks.useTranslates(),
        e = t.experience;

    return ( 
        <S.Exp>
            <S.ExpLinkHome to={'/' + location.pathname.split('/').filter(i => i)[0]}>
                {t.aboutReturn}
            </S.ExpLinkHome>
            <S.ExpTitle>{t.aboutTitle}</S.ExpTitle>
            <S.ExpFrame>
                <p>-- <span>{e.html.kn}</span> - <span>{e.html.t}</span></p>
                <p>-- <span>{e.css.kn}</span> - <span>{e.css.t}</span></p>
                <p>-- <span>{e.js.kn}</span> - <span>{e.js.t}</span></p>
                <p>-- <span>{e.ts.kn}</span> - <span>{e.ts.t}</span></p>
                <p>-- <span>{e.jsx.kn}</span> - <span>{e.jsx.t}</span></p>
                <p>-- <span>{e.git.kn}</span> - <span>{e.git.t}</span></p>
                <p>-- <span>{e.vite.kn}</span> - <span>{e.vite.t}</span></p>
                <p>-- <span>{e.fb.kn}</span> - <span>{e.fb.t}</span></p>
            </S.ExpFrame>
        </S.Exp>
    );
}

export default Exp;