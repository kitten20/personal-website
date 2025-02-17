import { hooks } from 'global/reusable';

import * as S from './index.style';

function Exp() {
    const {t} = hooks.useTranslates(),
        e = t.experience;

    return ( 
        <S.ExpFrame>
            <p>• <S.ExpSpanLeft>{e.html.kn}</S.ExpSpanLeft>: <span>{e.html.t}</span>;</p>
            <p>• <S.ExpSpanLeft>{e.css.kn}</S.ExpSpanLeft>: <span>{e.css.t}</span>;</p>
            <p>• <S.ExpSpanLeft>{e.js.kn}</S.ExpSpanLeft>: <span>{e.js.t}</span>;</p>
            <p>• <S.ExpSpanLeft>{e.ts.kn}</S.ExpSpanLeft>: <span>{e.ts.t}</span>;</p>
            <p>• <S.ExpSpanLeft>{e.jsx.kn}</S.ExpSpanLeft>: <span>{e.jsx.t}</span>;</p>
            <p>• <S.ExpSpanLeft>{e.git.kn}</S.ExpSpanLeft>: <span>{e.git.t}</span>;</p>
            <p>• <S.ExpSpanLeft>{e.vite.kn}</S.ExpSpanLeft>: <span>{e.vite.t}</span>;</p>
            <p>• <S.ExpSpanLeft>{e.fb.kn}</S.ExpSpanLeft>: <span>{e.fb.t}</span>.</p>
        </S.ExpFrame>
    );
}

export default Exp;