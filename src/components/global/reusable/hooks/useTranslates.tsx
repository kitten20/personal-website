import { useLocation } from 'react-router-dom';
import { translates } from 'global/reusable';

import { vars } from 'global/reusable';

const useTranslates = () => {
    const location = useLocation();
    const locationLanguage = vars.languages.find(i => location.pathname.startsWith(i));
    const t = translates.find(i => i.language === locationLanguage)!;

    return {t};
};

export default useTranslates;