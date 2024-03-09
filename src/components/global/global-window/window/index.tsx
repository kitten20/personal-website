import { Outlet, Link, useLocation } from 'react-router-dom';

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

    const changeLanguage = (path: string) => {
        const locationSplitted = location.pathname.split('/').filter(i => i);
        locationSplitted.splice(0, 1, path);
        return locationSplitted.join('/');
    };

    return ( 
        <S.WindowHeaderStyled>
            <S.WindowHeaderColumn>
                <span>Kitten20.exe</span>
                <Link to={changeLanguage('/ru')} replace>
                    <img src={iconRu} alt={'rus'} />
                </Link>
                <Link to={changeLanguage('/en')} replace>
                    <img src={iconGb} alt={'gb'} />
                </Link>
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