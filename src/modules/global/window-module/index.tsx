import type { PropsWithChildren } from 'react';

import * as S from './index.styles';
import { Button } from 'react95';

function WindowModule({ children }: PropsWithChildren) {
    return (
        <S.Window>
            <S.WindowHeader>
                <p>KITTEN20.EXE</p>
                <Button>
                    <S.CloseIcon />
                </Button>
            </S.WindowHeader>
            <S.ScrollView>
                <S.WindowContent>
                    {children}
                </S.WindowContent>
            </S.ScrollView>
        </S.Window>
    );
}

export default WindowModule;