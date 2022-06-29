const { createStore, applyMiddleware, combineReducers } = require('redux')
const { createLogger } = require('redux-logger')

// Action Type Constants
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

/* -------------------------------- */

const DISPLAY = 'DISPLAY'
const HIDE = 'HIDE'

// Action Creators: Functions which return action object
const incrementCounter = (count = 1) => ({
	type: INCREMENT_COUNTER,
	payload: count
})

const decrementCounter = (count = 1) => ({
	type: DECREMENT_COUNTER,
	payload: count
})

/* -------------------------------- */

const display = () => ({
	type: DISPLAY
})

const hide = () => ({
	type: HIDE
})

/* -------------------------------- */

let countInitialState = {
	count: 0,
}

const countReducer = (state = countInitialState, action) => {
	switch(action.type) {
		case INCREMENT_COUNTER: 
			return {
				...state,
				count: state.count + action.payload
			}
		case DECREMENT_COUNTER:
			return {
				...state,
				count: state.count - action.payload
			}
		default:
			return state
	}
}

/* -------------------------------- */

let showInitialState = {
	show: false,
}

const showReducer = (state = showInitialState, action) => {
	switch(action.type) {
		case DISPLAY:
			return {
				...state,
				show: true
			}
		case HIDE:
			return {
				...state,
				show: false
			}
		default:
			return state
	}
}

let rootReducer = combineReducers({
	show: showReducer,
	count: countReducer
})

/* -------------------------------- */

let store = createStore(rootReducer, applyMiddleware(createLogger()))

let unsubscribe = store.subscribe(() => {})

store.dispatch(incrementCounter(2))
store.dispatch(incrementCounter(4))
store.dispatch(display())
store.dispatch(incrementCounter())
store.dispatch(decrementCounter(7))
store.dispatch(hide())

unsubscribe()
