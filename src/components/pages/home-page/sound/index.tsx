import { hooks } from 'global/reusable';

import * as S from './index.style';

export function Sound() {
    const { t } = hooks.useTranslates();

    return ( 
        <S.Sound>
            <S.SoundTitle>
                {t.homeSoundCloudTitle}
            </S.SoundTitle>

            <S.SoundFrame variant='field'>
                <S.SoundIFrame src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1767727806&color=%23231c28&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false'/>
            </S.SoundFrame>
        </S.Sound>
    );
}