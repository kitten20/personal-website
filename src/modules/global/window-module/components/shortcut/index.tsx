import { useState, useEffect, useRef } from 'react';

import * as S from './index.styles';

import shortcutIcon from 'assets/desktop-assets/shortcut-icon.png';
import avatarImg from '/avatar-image.png';

function ShortCut({ openWindow }: { openWindow: () => void }) {
    const [isShortCutChecked, setIsShortCutChecked] = useState(false);

    const shortCutRef = useRef<HTMLButtonElement>(null);

    const onShortCutClick = () => setIsShortCutChecked(true);
    const onShortCutDoubleClick = () => {
        setIsShortCutChecked(false);
        openWindow();
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (shortCutRef.current && !shortCutRef.current.contains(event.target as Node)) {
                setIsShortCutChecked(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <S.ShortCut
            ref={shortCutRef}
            onClick={onShortCutClick}
            onDoubleClick={onShortCutDoubleClick}
        >
            <S.ShortCutIconWrapper>
                <S.ShortCutIcon
                    src={avatarImg}
                    alt="avatarImg"
                    style={{filter: isShortCutChecked ? 'brightness(0.8) sepia(1) hue-rotate(200deg) saturate(5)' : 'initial' }}
                />
                <S.ShortCutBottomLeftIcon
                    src={shortcutIcon}
                    alt='shortcutIcon'
                />
            </S.ShortCutIconWrapper>
            <S.ShortCutText
                style={{
                    backgroundColor: isShortCutChecked ? 'var(--link-color)' : 'transparent',
                    border: isShortCutChecked ? '1px dotted white' : '1px dotted transparent'
                }}
            >
                {import.meta.env.VITE_APP_NAME}
            </S.ShortCutText>
        </S.ShortCut>
    );
}

export { ShortCut };