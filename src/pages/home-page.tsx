import { Helmet } from 'react-helmet-async';

import { Welcome, Find, Footer, Cmd, Sound } from 'components/home-page';

function HomePage() {
    return ( 
        <>
            <Helmet>
                <title>KITTEN20.EXE</title>
            </Helmet>
            <Welcome />

            <Cmd />

            <Sound />

            <Find />

            <Footer />
        </>
    );
}

export default HomePage;