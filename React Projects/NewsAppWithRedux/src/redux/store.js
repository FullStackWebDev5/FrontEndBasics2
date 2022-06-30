import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { countReducer } from './count/reducer.js'
import { newsReducer } from './news/reducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'

let rootReducer = combineReducers({
	count: countReducer,
	news: newsReducer,
})

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk, createLogger()))
);

export default store