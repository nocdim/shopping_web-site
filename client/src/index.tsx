import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store/store';


// store - объект, который содержит несколько методов (получить - getState, изменить state - dispatch и...
// подписаться на изменения в состоянии)

const store = setupStore()


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

