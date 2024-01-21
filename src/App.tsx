import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { WindowContainer } from 'global';
import { HomePage, AboutPage } from './pages';

function App() {
    return (
        <>
            <Helmet>
                <link rel='icon' href={'https://avatars.githubusercontent.com/u/111589096?v=4'} />
                <meta name='description' content='An 18-Year-Old Frontend Developer from Russia, who loves old-school games, delicious pizza, Breakcore music and JavaScript!' />

                <meta property='og:type' content='website' />
                <meta property='og:site_name' content='KITTEN20.EXE' />
                <meta property='og:image' content='og-photo.png' />
                <meta property='og:description' content='An 18-Year-Old Frontend Developer from Russia, who loves old-school games, delicious pizza, Breakcore music and JavaScript!' />
                
                <meta property='twitter:image' content='og-photo.png' />
                <meta property='twitter:card' content='summary_large_image' />
                <meta property='twitter:description' content='An 18-Year-Old Frontend Developer from Russia, who loves old-school games, delicious pizza, Breakcore music and JavaScript!' />
            </Helmet>

            <Routes>
                <Route path='/' element={<WindowContainer />}>
                    <Route index element={<HomePage />} />
                    <Route path='about' element={<AboutPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;