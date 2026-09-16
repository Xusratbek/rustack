import "flag-icons/css/flag-icons.min.css";
import { createRoot } from 'react-dom/client';
import './i18n/i18n.js';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
)
