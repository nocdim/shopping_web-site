import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// store - объект, который содержит несколько методов (получить - getState, изменить state - dispatch и...
// подписаться на изменения в состоянии)


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

