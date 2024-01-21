import { Helmet } from 'react-helmet-async';

import { Welcome, Find, Footer, Cmd } from 'components/home-page';

function HomePage() {
    return ( 
        <>
            <Helmet>
                <title>KITTEN20.EXE</title>

                <meta property='og:url' content='https://kitten20.vercel.app' />
                <meta property='og:title' content='KITTEN20.EXE' />
                <meta property='twitter:title' content='KITTEN20.EXE' />
            </Helmet>
            <Welcome />

            <Cmd />

            <Find />

            <Footer />
        </>
    );
}

export default HomePage;