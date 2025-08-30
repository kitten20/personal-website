import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import i18n from 'i18next';
import { possibleLanguages, languageQueryParam, type TLanguages } from 'translation-constants';

import * as S from './index.styles';

import gbIcon from 'assets/languages-icons/gb.png';
import ruIcon from 'assets/languages-icons/ru.png';

function LanguageChangerCurrentIcon({ currentLanguage } : { currentLanguage:TLanguages }) {
    switch (currentLanguage) {
        case 'en':
            return (
                <img
                    src={ruIcon} alt="ruIcon"
                />
            );

        case 'ru':
            return (
                <img
                    src={gbIcon} alt="gbIcon"
                />
            );
    
        default:
            return (
                <img
                    src="" alt="lang-not-found"
                />
            );
    }
}

function LanguageChanger () {
    const { t } = useTranslation();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const lang = urlParams.get(languageQueryParam);
    
        possibleLanguages.forEach((el: TLanguages) => {
            if (lang === el) {
                i18n.changeLanguage(el);
            }
        });
    }, []);

    const toggleLanguage = () => {
        const language = i18n.language === possibleLanguages[0] ? possibleLanguages[1] : possibleLanguages[0];

        const url = new URL(window.location.href);
        url.searchParams.set(languageQueryParam, language);
        i18n.changeLanguage(language);
        window.history.replaceState({}, '', url.toString());
    };

    return (
        <S.LanguageChangerButton
            onClick={toggleLanguage}
        >
            <LanguageChangerCurrentIcon
                currentLanguage={i18n.language as TLanguages}
            />
            <p>{t('switchToLanguage')}</p>
        </S.LanguageChangerButton>
    );
}

export { LanguageChanger };