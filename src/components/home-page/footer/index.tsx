import { useEffect, useState } from 'react';

import * as S from './index.style';

function Footer() {
    const [version, setVersion] = useState('-.-.-');

    useEffect(() => {
        fetch('package.json')
            .then(response => response.json())
            .then(data => setVersion(data.version));
    }, []);
    

    return ( <S.Footer>
        <S.LineThrough>
            <p>Coded and designed by Daniil Ulyanov in 2024</p>
        </S.LineThrough>

        <S.RightVersion>Project version: {version}. <a href=''>Check the Repo!</a></S.RightVersion>
    </S.Footer> );
}

export default Footer;