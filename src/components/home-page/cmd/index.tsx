import { useState, useEffect } from 'react';

import Typewriter from 'typewriter-effect';

import * as S from './index.style';
import styles from './style.module.css';

interface INews {
    date: string;
    info: string;
    tag?: string;
}

function Cmd() {
    const [news, setNews] = useState<INews[]>([]);

    useEffect(() => {
        fetch('server/news.json').then(res => res.json()).then(i => setNews(i.news));
    }, []);

    return news[0]?.date ? (
        <S.Cmd>
            <S.CmdFrame variant='field'>
                <Typewriter
                    options={{
                        cursorClassName: styles.cursor,
                        delay: 32
                    }}
                    onInit={(typewriter) => {
                        typewriter
                            .pasteString(`<span class=${styles.centered_adaptive}>Kittosoft(R) Mirrors 95</span>`, null)
                            .pasteString(`<br/><span class=${styles.centered_adaptive}><span class=${styles.left_space}></span>(C)Copyright Kittosoft Corp. <br class=${styles.break_adaptive} />2021 - 2024</span>`, null)
                            .pauseFor(1500)
                            .pasteString('<br/>', null)
                            .pasteString('<br/>' + `<span class=${styles.path}>C:/Users/AnonymousKitten-${'' + Math.ceil(Math.random() * 10000000)}</span>>`, null)
                            .pauseFor(350)
                            .typeString('shownews')
                            .pasteString('<br/>', null)
                            .pauseFor(500);

                        news.forEach(i => typewriter.pasteString('<br/>' + `<div class=${styles.news}><div>${i.date}:</div><div>${i.info}</div><div class=${i.tag === 'music' ? styles.music : i.tag === 'coding' ? styles.coding : '' }>#${i.tag}</div></div>`, null));

                        typewriter.start();
                    }}
                />
            </S.CmdFrame>
        </S.Cmd>
    ) : <S.Cmd><S.CmdFrame /></S.Cmd>;
}

export default Cmd;