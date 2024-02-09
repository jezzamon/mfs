import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start the app
const mount = (el, { onNavigate, defaultHistory }) => {
  // if running in isolation use browerHistory, if running as a mf use MemoryHistory
  const history = defaultHistory || createMemoryHistory();

  // everytime there is a route change run onNavigate (only exists if running wth Container)
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
      console.log('container just navigated');
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  // is it in isolation?
  const el = document.querySelector('#marketing-dev-root');
  if (el) {
    // We are probably running in isolation
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
