import WindowModule from 'modules/global/window-module';
import * as PMImport from 'modules/pages/main-page'; // PM stands for Page Modules

function MainPage() {
    return ( 
        <WindowModule>
            <PMImport.WelcomeModule />
            <PMImport.ExperienceModule />
        </WindowModule>
    );
}

export default MainPage;