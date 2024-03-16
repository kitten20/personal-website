import { Helmet } from 'react-helmet-async';

import { Exp } from 'components/pages/about-page';

function AboutPage() {
    return ( 
        <>
            <Helmet><title>KITTEN20.EXE | ABOUT</title></Helmet>
            <Exp />
        </>
    );
}

export default AboutPage;