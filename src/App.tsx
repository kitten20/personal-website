import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { WindowContainer } from 'global';
import { HomePage, AboutPage } from './pages';

function App() {
    return (
        <>
            <Helmet>
                <link rel="icon" href={'https://avatars.githubusercontent.com/u/111589096?v=4'} />
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