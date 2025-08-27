import * as S from './index.styles';

function FooterModule() {
    return ( 
        <S.FooterModule>
            <S.LineThrough>
                <S.LineThroughText>
                    Coded and designed by Daniil Ulyanov in 2025
                </S.LineThroughText>
            </S.LineThrough>
            <S.FooterBottom>
                <span></span>
                <S.FooterVersion>
                    Project version: {import.meta.env.VITE_APP_VERSION}.
                    {' '}
                    <a
                        href="https://github.com/kitten20/personal-website"
                    >
                        Check the Repo!
                    </a>
                </S.FooterVersion>
            </S.FooterBottom>
        </S.FooterModule>
    );
}

export default FooterModule;