import { Routes, Route } from 'react-router-dom';

import { WindowContainer } from 'global';
import { HomePage, AboutPage } from './pages';

function App() {
    return (
        <Routes>
            <Route path='/' element={<WindowContainer />}>
                <Route index element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
            </Route>
        </Routes>
    );
}

export default App;