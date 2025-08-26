import WindowModule from 'modules/global/window-module';
import WelcomeModule from 'modules/pages/main-page/welcome-module';

function MainPage() {
    return ( 
        <WindowModule>
            <WelcomeModule />
        </WindowModule>
    );
}

export default MainPage;