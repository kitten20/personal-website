import { Helmet } from 'react-helmet-async';

import { Exp, Comp } from 'components/pages/about-page';

function AboutPage() {
    return ( 
        <>
            <Helmet><title>KITTEN20.EXE | ABOUT</title></Helmet>
            <Exp />
            <Comp />
        </>
    );
}

export default AboutPage;