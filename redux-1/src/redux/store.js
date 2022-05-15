import { createStore, applyMiddleware, combineReducers } from 'redux'
import countReducer from './count/reducer'
import displayHideReducer from './displayHide/reducer'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
	count: countReducer,
	displayHide: displayHideReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(createLogger()))
);

export default store