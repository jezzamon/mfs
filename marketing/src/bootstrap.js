import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === 'development') {
  // is it in isolation?
  const el = document.querySelector('#marketing-dev-root');
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

export { mount };
