import { useContext } from 'react';

import { Context } from 'global';

import Typewriter from 'typewriter-effect';

import * as S from './index.style';
import styles from './style.module.css';

// Please, don't judge me. This typewriter is a freaking bag fulled of crap
function TypewriterComponent() {
    const { news, locationIsChanged } = useContext(Context);
    
    return <Typewriter
        options={{
            cursorClassName: styles.cursor,
            delay: 6
        }}
        onInit={(typewriter) => {
            if (!locationIsChanged) {
                typewriter
                    .pasteString(`<span class=${styles.centered_adaptive}>Kittosoft(R) Mirrors 95</span>`, null)
                    .pasteString(`<br/><span class=${styles.centered_adaptive}><span class=${styles.left_space}></span>(C)Copyright Kittosoft Corp. <br class=${styles.break_adaptive} />2021 - ${new Date().getFullYear()}</span>`, null)
                    .pauseFor(1500)
                    .pasteString('<br/>', null)
                    .pasteString('<br/>' + `<span class=${styles.path}>C:/Users/AnonymousKitten-${'' + Math.ceil(Math.random() * 10000000)}</span>>`, null)
                    .pauseFor(350)
                    .typeString('shownews')
                    .pasteString('<br/>', null)
                    .pauseFor(500);

                news.forEach(i => {
                    return typewriter.pasteString('<br/>' + `<div class=${styles.news}><div>${i.date}:</div><div>${i.info}</div><div class=${i.tag === 'music' ? styles.music : i.tag === 'coding' ? styles.coding : '' }>#${i.tag}</div></div>`, null);
                });

                typewriter.start();
            } else {
                typewriter
                    .pasteString(
                        `<span class=${styles.centered_adaptive}>Kittosoft(R) Mirrors 95</span><br/><span class=${styles.centered_adaptive}><span class=${styles.left_space}></span>(C)Copyright Kittosoft Corp. <br class=${styles.break_adaptive} />2021 - ${new Date().getFullYear()}</span><br/><br/><span class=${styles.path}>C:/Users/AnonymousKitten-${'' + Math.ceil(Math.random() * 10000000)}</span>>shownews<br/>`, null);

                news.forEach(i => {
                    return typewriter.pasteString('<br/>' + `<div class=${styles.news}><div>${i.date}:</div><div>${i.info}</div><div class=${i.tag === 'music' ? styles.music : i.tag === 'coding' ? styles.coding : '' }>#${i.tag}</div></div>`, null);
                });

                typewriter.start();
            }
        }}
    />;
}

function Cmd() {
    const { news } = useContext(Context);
    
    return news[0]?.date ? (
        <S.Cmd>
            <S.CmdFrame variant='field'>
                <TypewriterComponent />
            </S.CmdFrame>
        </S.Cmd>
    ) : <S.Cmd><S.CmdFrame /></S.Cmd>;
}

export default Cmd;