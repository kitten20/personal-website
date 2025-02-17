import { Helmet } from 'react-helmet-async';

import { Welcome, Cmd, Sound, Comp } from 'components/pages/home-page';

function HomePage() {
    return ( 
        <>
            <Helmet>
                <title>KITTEN20.EXE</title>
            </Helmet>
            <Welcome />
            <Cmd />
            <Comp />
            <Sound />
        </>
    );
}

export default HomePage;