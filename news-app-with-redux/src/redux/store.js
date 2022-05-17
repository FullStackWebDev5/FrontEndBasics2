import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import newsReducer from './news/reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  newsReducer,
  composeWithDevTools(applyMiddleware(reduxThunk, createLogger()))
);

export default store