import { useLocation } from 'react-router-dom';
import { translates } from 'global/reusable';

const languageRoutes = ['/ru', '/en'];

const useTranslates = () => {
    const location = useLocation();
    const locationLanguage = languageRoutes.find(i => location.pathname.startsWith(i));
    const t = translates.find(i => i.language === locationLanguage)!;

    return {t};
};

export default useTranslates;