import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { Container } from 'reactstrap';
import createAppStore from 'app/stores';
import App from './App';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();
const store = createAppStore(history);

store.subscribe(() => { window.store = store.getState(); });

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Container>
        <App />
      </Container>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('container'),
);


// {
//     "javascript.validate.enable": false,
//     "flow.useNPMPackagedFlow": true,
//     "stylelint.enable": true,
//     "css.validate": false,
//     "scss.validate": false,
//     "eslint.options": {
//       "extensions": [".js", ".jsx"],
//       "ignorePattern": ["webpack.config.js"]
//     }
//   }
