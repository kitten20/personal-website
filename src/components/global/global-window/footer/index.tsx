import * as S from './index.style';

function Footer() {
    const version = `${import.meta.env.VITE_APP_VERSION}`;    

    return ( <S.Footer>
        <S.LineThrough>
            <p>Coded and designed by <span>Daniil Ulyanov in 2024</span></p>
        </S.LineThrough>

        <S.RightVersion>Project version: {version}. <a href='https://github.com/kitten20/personal-website'>Check the Repo!</a></S.RightVersion>
    </S.Footer> );
}

export default Footer;