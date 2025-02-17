import { useContext } from 'react';
import { Context } from 'global';

import NewsTypewriter from './typewriter-component';

import * as S from './index.style';

export function Cmd() {
    const { news } = useContext(Context);
    
    return (
        <S.Cmd>
            {news[0]?.date ? (
                <S.CmdFrame variant='field'>
                    <NewsTypewriter />
                </S.CmdFrame>
            ) : (
                <S.CmdFrame />
            )}
        </S.Cmd>
    );
}