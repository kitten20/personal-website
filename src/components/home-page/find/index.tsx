import * as S from './index.style';

import imgSteam from './assets/steam.png';
import imgDiscord from './assets/discord.png';
import imgSoundcloud from './assets/soundcloud.png';
import imgGithub from './assets/github.png';

function FindMedia ({href, src}: {href: string, src: string }) {
    return <a href={href}>
        <img src={src} alt={href} />
    </a>;
}

function Find() {
    return ( 
        <S.Find>
            <S.FindTitle>where can you find me?</S.FindTitle>
            <S.FindSocials>
                <FindMedia href="https://steamcommunity.com/profiles/76561199068911801/" src={imgSteam}/>
                <FindMedia href="https://discordapp.com/users/426331342436040704" src={imgDiscord}/>
                <FindMedia href="https://soundcloud.com/qrellyq/tracks" src={imgSoundcloud}/>
                <FindMedia href="https://github.com/kitten20" src={imgGithub}/>
            </S.FindSocials>
        </S.Find>
    );
}

export default Find;