import { Routes, Route } from 'react-router-dom';
import { WindowContainer, ContextProvider } from 'global';
import { HomePage, AboutPage } from './pages';

function App() {
    return (
        <ContextProvider>
            <Routes>
                <Route path='/' element={<WindowContainer />}>
                    <Route index element={<HomePage />} />
                    <Route path='about' element={<AboutPage />} />
                </Route>
            </Routes>
        </ContextProvider>
    );
}

export default App;