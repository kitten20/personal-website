import { hooks } from 'global/reusable';
import * as S from './index.style';

import sassIcon from './assets/sass.webp';
import tsIcon from './assets/typescript.png';
import reactIcon from './assets/react.png';

function Welcome() {
    const { t } = hooks.useTranslates();

    return ( 
        <S.Welcome id='#start'>
            <S.WelcomeColumn>
                <S.Avatar square src={'https://avatars.githubusercontent.com/u/111589096?v=4'} />
            </S.WelcomeColumn>

            <S.WelcomeColumn>
                <S.TitleTopWrapper>
                    <S.TitleWelcome>{t.homeWelcome}</S.TitleWelcome>
                    <S.TitleTopLinks>
                        <p>a.k.a.</p>
                        <a href='https://t.me/qMilly'>qMilly,</a>
                        <a href='https://discordapp.com/users/426331342436040704'>K1tten_21,</a>
                        <a href='https://soundcloud.com/qrellyq/tracks'>Relly Q - Almost Dead,</a>
                        <a href='https://github.com/kitten20'>Kitten20</a>
                    </S.TitleTopLinks>

                    <S.DescriptionContainer>
                        <p>{t.homeDescription}</p>
                        <p>{t.homeUnderDescription}</p>
                    </S.DescriptionContainer>

                    <S.Tabs>
                        <S.TabSASS>
                            <img src={sassIcon} alt="sassIcon" />
                            <p>SCSS</p>
                        </S.TabSASS>

                        <S.TabTS>
                            <img src={tsIcon} alt="tsIcon" />
                            <p>Typescript</p>
                        </S.TabTS>

                        <S.TabReact>
                            <img src={reactIcon} alt="reactIcon" />
                            <p>React</p>
                        </S.TabReact>
                    </S.Tabs>
                </S.TitleTopWrapper>
            </S.WelcomeColumn>
        </S.Welcome>
    );
}

export default Welcome;