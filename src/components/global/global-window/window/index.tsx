import { Outlet, useLocation } from 'react-router-dom';

import { vars } from 'global/reusable';

import { Button } from 'react95';
import Find from '../find';
import Footer from '../footer';

import Background from '../background';
import GlobalStyles from '../global-styles/index.styles';

import iconRu from './assets/ru.png';
import iconGb from './assets/gb.png';

import * as S from './index.styles';

function WindowHeader() {
    const location = useLocation();
    const { languages } = vars;
    const pathnameSplitted = location.pathname.split('/')[1];

    const changeLanguage = (path: string) => {
        const locationSplitted = location.pathname.split('/').filter(i => i);
        locationSplitted.splice(0, 1, path);
        return locationSplitted.join('/');
    };

    return ( 
        <S.WindowHeaderStyled>
            <S.WindowHeaderColumn>
                <span>Kitten20.exe</span>
                <S.WindowHeaderLinkFlag to={changeLanguage(languages[0])} replace checked={pathnameSplitted === 'ru'}>
                    <img src={iconRu} alt={'rus'} />
                </S.WindowHeaderLinkFlag>
                <S.WindowHeaderLinkFlag to={changeLanguage(languages[1])} replace checked={pathnameSplitted === 'en'}>
                    <img src={iconGb} alt={'gb'} />
                </S.WindowHeaderLinkFlag>
            </S.WindowHeaderColumn>
            <Button onClick={() => window.location.href = 'https://github.com/kitten20'}>
                <S.CloseIcon />
            </Button>
        </S.WindowHeaderStyled>
    );
}

function WindowContainer() {
    return ( 
        <>
            <Background />
            <GlobalStyles />
            <S.Window>
                <WindowHeader/>
                <S.WindowContent>
                    <S.ScrollView>
                        <S.ScrollChild>
                            <Outlet />
                            <Find />
                            <Footer />
                        </S.ScrollChild>
                    </S.ScrollView>
                </S.WindowContent>
            </S.Window>
        </>
    );
}

export default WindowContainer;