import { hooks } from 'global/reusable';
import * as S from './index.style';

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
                        <S.DescriptionLinkAbout to='about#skills' className='about-me'>{t.homeAboutMe}</S.DescriptionLinkAbout>
                    </S.DescriptionContainer>
                </S.TitleTopWrapper>
            </S.WelcomeColumn>
        </S.Welcome>
    );
}

export default Welcome;