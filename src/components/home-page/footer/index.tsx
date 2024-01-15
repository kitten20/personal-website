import * as S from './index.style';

function Footer() {
    const version = `${import.meta.env.VITE_APP_VERSION}`;    

    return ( <S.Footer>
        <S.LineThrough>
            <p>Coded and designed by Daniil Ulyanov in 2024</p>
        </S.LineThrough>

        <S.RightVersion>Project version: {version}. <a href=''>Check the Repo!</a></S.RightVersion>
    </S.Footer> );
}

export default Footer;