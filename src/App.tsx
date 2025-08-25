import { ThemeProvider } from 'styled-components';

import GlobalStyles from './utils/global-styles/index.styles';
import MainPage from './pages/main-page';
import BackgroundModule from 'modules/global/background-module';

import original from 'react95/dist/themes/original';

function App() {
    return (
        <ThemeProvider
            theme={original}
        >
            <BackgroundModule />
            <GlobalStyles />
            <MainPage />
        </ThemeProvider>
    );
}

export default App;