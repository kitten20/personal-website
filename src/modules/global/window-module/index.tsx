import { useRef, useState, type PropsWithChildren } from 'react';

import { Button } from 'react95';
import * as MC from './components'; // MC stands for Module Component due to it's storing inside
import FooterModule from '../footer-module';

import * as S from './index.styles';

function WindowModule({ children }: PropsWithChildren) {
    const [isWindowClosed, setIsWindowClosed] = useState(false);

    const windowContentRef = useRef<HTMLDivElement | null>(null);

    const closeWindowEvent = () => {
        if (windowContentRef.current) {
            windowContentRef.current.scrollTop = 0;
        }
        setIsWindowClosed(true);
    };

    const openWindow = () => setIsWindowClosed(false);

    return (
        <>
            <S.Window
                style={{
                    transform: isWindowClosed ? 'translateY(-300%)' : 'initial'
                }}
            >
                <MC.WindowHeader>
                    <Button
                        onClick={closeWindowEvent}
                    >
                        <S.CloseIcon />
                    </Button>
                </MC.WindowHeader>
                <S.ScrollView>
                    <S.WindowContent
                        ref={windowContentRef}
                    >
                        {children}
                        <FooterModule />
                        <MC.WindowLoader />
                    </S.WindowContent>
                </S.ScrollView>
            </S.Window>

            <MC.ShortCut
                {...{ openWindow }}
            />
        </>
    );
}

export default WindowModule;