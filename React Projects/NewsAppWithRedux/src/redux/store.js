import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { countReducer } from './count/reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'

let store = createStore(
  countReducer,
  composeWithDevTools(applyMiddleware(createLogger()))
);

export default store