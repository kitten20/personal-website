import { hooks } from 'global/reusable';

import * as S from './index.style';

import imgTelegram from './assets/telegram.png';
import imgDiscord from './assets/discord.png';
import imgSoundcloud from './assets/soundcloud.png';
import imgGithub from './assets/github.png';

function FindMedia ({href, src}: {href: string, src: string }) {
    return <a href={href}>
        <img src={src} alt={href} />
    </a>;
}

function Find() {
    const { t } = hooks.useTranslates();

    return ( 
        <S.Find>
            <S.FindTitle>{t.mainFindTitle}</S.FindTitle>
            <S.FindSocials>
                <FindMedia href="https://t.me/qMilly" src={imgTelegram}/>
                <FindMedia href="https://discordapp.com/users/426331342436040704" src={imgDiscord}/>
                <FindMedia href="https://soundcloud.com/qrellyq/tracks" src={imgSoundcloud}/>
                <FindMedia href="https://github.com/kitten20" src={imgGithub}/>
            </S.FindSocials>
        </S.Find>
    );
}

export default Find;