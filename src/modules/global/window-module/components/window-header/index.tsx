import type { PropsWithChildren } from 'react';
import useFontsLoadingProgress from 'hooks/use-fonts-loading-progress';

import * as S from '../../index.styles';

function WindowHeader({ children }: PropsWithChildren) {
    const { haveFontsBeenLoaded } = useFontsLoadingProgress();

    return (
        <S.WindowHeader>
            <p>{haveFontsBeenLoaded && import.meta.env.VITE_APP_NAME}</p>
            {children}
        </S.WindowHeader>
    );
}

export { WindowHeader };