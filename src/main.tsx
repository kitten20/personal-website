import { createRoot } from 'react-dom/client';
import App from './App';

import './translations/i18n';

createRoot(document.getElementById('root')!).render(<App />);
