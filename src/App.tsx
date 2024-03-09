import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { WindowContainer, ContextProvider } from 'global';
import { HomePage, AboutPage } from './pages';

const languages = ['/ru', '/en'];

function Language() {
    const location = useLocation();

    if(location.pathname.startsWith(languages[0]) || location.pathname.startsWith(languages[1])) {
        return <WindowContainer />;
    }

    return <Navigate to={languages[1]} replace={true}/>;
}
function App() {
    return (
        <ContextProvider>
            <Routes>
                {languages.map(path => 
                    <Route path={'/' + path} element={<Language />}>
                        <Route index element={<HomePage />} />
                        <Route path='about' element={<AboutPage />} />
                    </Route>
                )}
                <Route path='*' element={<Navigate to ={languages[1]} replace={true} />} />
            </Routes>
        </ContextProvider>
    );
}

export default App;