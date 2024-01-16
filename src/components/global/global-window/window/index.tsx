import { Outlet } from 'react-router-dom';

import Background from '../background';
import GlobalStyles from '../global-styles/index.styles';

import { Button } from 'react95';
import * as S from './index.styles';

function WindowHeader() {
    return ( 
        <S.WindowHeaderStyled>
            <span>Kitten20.exe</span>
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
                    <S.ScrollView className='scroll-view'>
                        <S.ScrollChild className='scroll-child'>
                            <Outlet />
                        </S.ScrollChild>
                    </S.ScrollView>
                </S.WindowContent>
            </S.Window>
        </>
    );
}

export default WindowContainer;