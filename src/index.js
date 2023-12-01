import React from 'react';
import { Provider } from 'react-redux';
import store from './queries/store';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { queriesApi } from './queries/queries';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

// Update this part in your index.js
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={queriesApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
