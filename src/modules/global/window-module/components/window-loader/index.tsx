import { useEffect } from 'react';

import * as S from './index.styles';
import useFontsLoadingProgress from 'hooks/use-fonts-loading-progress';
import useWindowLoadingProgress from 'hooks/use-window-loading-progress';

interface ILoadingCoverProps {
    totalLoadingProgress: number,
}

function WindowLoadingCover({ totalLoadingProgress } : ILoadingCoverProps) {
    useEffect(() => {
        let dotsNumber: number = 0;
        document.title = 'Loading';

        const loadingInterval = setInterval(() => {
            if (dotsNumber >= 3) {
                dotsNumber = 0;
                document.title = 'Loading';
            } else {
                dotsNumber += 1;
                document.title += '.';
            }
        }, 300);

        return () => clearInterval(loadingInterval);
    }, []);

    return (
        <S.LoadingCover>
            <S.ProgressTopText>
                Loading
            </S.ProgressTopText>
            <S.ProgressBarWrapper
                style={{
                    color: (totalLoadingProgress < 50 ? '#060084' : 'white')
                }}
            >
                <S.ProgressBarBackground
                    style={{
                        width: `calc(${totalLoadingProgress}% - 4px)`,
                    }}
                />
                {totalLoadingProgress + '%'}
            </S.ProgressBarWrapper>
        </S.LoadingCover>
    );
}

function WindowLoader() {
    const { inPercents: fontsLoadingProgress } = useFontsLoadingProgress();
    const { inPercents: windowLoadingProgress } = useWindowLoadingProgress();

    const totalLoadingProgress = Math.round(
        (fontsLoadingProgress * 0.3) + (windowLoadingProgress * 0.7)
    );
    const hasPageBeenLoaded = totalLoadingProgress === 100;

    useEffect(() => {
        if (hasPageBeenLoaded) {
            document.title = import.meta.env.VITE_APP_NAME;
        }
    }, [hasPageBeenLoaded]);

    return !hasPageBeenLoaded ? (
        <WindowLoadingCover
            {...{ totalLoadingProgress, hasPageBeenLoaded }}
        />
    ) : (
        <></>
    );
}

export { WindowLoader };