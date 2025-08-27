import useFontsProgress from 'hooks/use-fonts-progress';
import useWindowLoadingProgress from 'hooks/use-window-loading-progress';

import * as S from './index.styles';

function LoadingCover() {
    const fontsProgress = useFontsProgress();
    const windowLoadingProgress = useWindowLoadingProgress();

    const totalProgress = Math.round(
        (fontsProgress * 0.3) + (windowLoadingProgress * 0.7)
    );

    return totalProgress === 100 ? (
        <></>
    ) : (
        <S.LoadingCover>
            <S.ProgressTopText>
                Loading
            </S.ProgressTopText>
            <S.ProgressBarWrapper
                style={{
                    color: (totalProgress < 50 ? 'black' : 'white')
                }}
            >
                <S.ProgressBarBackground
                    style={{
                        width: `calc(${totalProgress}% - 4px)`,
                    }}
                />
                {totalProgress + '%'}
            </S.ProgressBarWrapper>
        </S.LoadingCover>
    );
}

export default LoadingCover;