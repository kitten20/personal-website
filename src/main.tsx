import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';

import original from 'react95/dist/themes/original';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <HelmetProvider>
            <ThemeProvider theme={original}>
                <App />
            </ThemeProvider>
        </HelmetProvider>
    </BrowserRouter>
);