import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import { WindowContainer, ContextProvider } from 'global';
import HomePage from './pages/home-page';

import { vars } from 'global/reusable';

const { languages } = vars;

function Language() {
    const location = useLocation();

    if(location.pathname.startsWith(languages[0]) || location.pathname.startsWith(languages[1])) {
        return <WindowContainer />;
    }

    return <Navigate to={vars.languages[1]} replace={true}/>;
}

function App() {
    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) element.scrollIntoView();
        }
    }, []);

    return (
        <ContextProvider>
            <Routes>
                {languages.map(path => 
                    <Route path={'/' + path} element={<Language />}>
                        <Route index element={<HomePage />} />
                    </Route>
                )}
                <Route path='*' element={<Navigate to ={languages[1]} replace={true} />} />
            </Routes>
        </ContextProvider>
    );
}

export default App;