import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { scan } from 'react-scan';

import { App } from './app';
import { enableMocking } from './tests/mocks';

import './index.css';

scan({
  enabled: true,
});

const root = document.getElementById('root');
if (!root) throw new Error('No root element found');

enableMocking().then(() => {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
