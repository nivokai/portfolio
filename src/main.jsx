import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Pas de <StrictMode> : son double montage en dev fait perdre le contexte WebGL du fond Aurora.
createRoot(document.getElementById('root')).render(<App />);
