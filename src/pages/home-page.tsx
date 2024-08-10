import { Helmet } from 'react-helmet-async';

import { Welcome, Cmd, Sound } from 'components/pages/home-page';
import { Comp } from 'src/components/pages/about-page';

function HomePage() {
    return ( 
        <>
            <Helmet><title>KITTEN20.EXE</title></Helmet>
            <Welcome />
            <Cmd />
            <Comp />
            <Sound />
        </>
    );
}

export default HomePage;