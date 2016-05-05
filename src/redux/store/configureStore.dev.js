import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore() {
  let store = createStore(rootReducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f //add support for Redux dev tools
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
