import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

// Mount function to start the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  // everytime there is a route change run onNavigate
  history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);
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
