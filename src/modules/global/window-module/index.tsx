import type { PropsWithChildren } from 'react';
import useFontsProgress from 'hooks/use-fonts-progress';

import { Button } from 'react95';
import FooterModule from '../footer-module';
import LoadingCover from './loading-cover';

import * as S from './index.styles';

function WindowModule({ children }: PropsWithChildren) {
    const fontsProgress = useFontsProgress();

    return (
        <S.Window>
            <S.WindowHeader>
                <p>{fontsProgress === 100 ? 'KITTEN20.EXE' : ' '}</p>
                <Button>
                    <S.CloseIcon />
                </Button>
            </S.WindowHeader>
            <S.ScrollView>
                <S.WindowContent>
                    {children}
                    <FooterModule />
                    <LoadingCover />
                </S.WindowContent>
            </S.ScrollView>
        </S.Window >
    );
}

export default WindowModule;