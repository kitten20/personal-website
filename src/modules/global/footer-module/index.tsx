import { useTranslation } from 'react-i18next';

import * as MC from './components';

import * as S from './index.styles';

function FooterModule() {
    const { t } = useTranslation();

    return ( 
        <S.FooterModule>
            <S.LineThrough>
                <S.LineThroughText>
                    {t('codedAndDesigned')}
                </S.LineThroughText>
            </S.LineThrough>
            <S.FooterBottom>
                <MC.LanguageChanger />
                <S.FooterVersion>
                    {t('projectVersion')}: {import.meta.env.VITE_APP_VERSION}.
                    {' '}
                    <a
                        href="https://github.com/kitten20/personal-website"
                    >
                        {t('checkTheRepo')}
                    </a>
                </S.FooterVersion>
            </S.FooterBottom>
        </S.FooterModule>
    );
}

export default FooterModule;