import { Link } from 'react-router-dom';

import * as S from './index.style';

function Welcome() {
    return ( 
        <S.Welcome>
            <S.WelcomeColumn>
                <S.Avatar square src={'https://avatars.githubusercontent.com/u/111589096?v=4'} />
            </S.WelcomeColumn>

            <S.WelcomeColumn>
                <S.TitleTopWrapper>
                    <S.TitleWelcome>Hi, I'm Daniil Ulyanov!</S.TitleWelcome>
                    <S.TitleTopLinks>
                        <p>a.k.a.</p>
                        <a href="https://discordapp.com/users/426331342436040704">K1tten_21,</a>
                        <a href="https://soundcloud.com/qrellyq/tracks">Relly Q - Almost Dead,</a>
                        <a href="https://github.com/kitten20">Kitten20.</a>
                    </S.TitleTopLinks>

                    <S.DescriptionContainer>
                        <p>An 18-Year-Old Frontend Developer from Russia, who loves old-school games, delicious pizza, Breakcore music and JavaScript!</p>
                        <p>Currently working in <a href="https://slex.io">slex.io</a>.</p>
                        <Link to="/about" className='in-progress'>about this project<span>(in progress)</span></Link>
                    </S.DescriptionContainer>
                </S.TitleTopWrapper>
            </S.WelcomeColumn>
        </S.Welcome>
    );
}

export default Welcome;