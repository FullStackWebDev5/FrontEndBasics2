const redux = require('redux');
const { createStore } = redux

// ACTIONS

// Action Type Constants
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

const DISPLAY = 'DISPLAY'
const HIDE = 'HIDE'

// Action Object
// Eg: For incrementing count by 1
// {
//   type: INCREMENT_COUNTER,
// }

// Eg: For decrementing count by 1
// {
//   type: DECREMENT_COUNTER,
// }

// Action Creators - Functions which return action
const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
});

const display = () => ({
  type: DISPLAY,
});

const hide = () => ({
  type: HIDE,
});
/* -------------------------------------------------------------- */

// REDUCER FUNCTION
// Initial State
const initialState = {
	count: 0,
	show: false,
}

/*
	REDUCER
	- Create an initial state
	- It has two parameters - prevState, action
	- Contains logic to return updated state on basis of prevState and action
*/

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_COUNTER:
			return {
				...state,
				count: state.count + 1
			}
		case DECREMENT_COUNTER:
			return {
				...state,
				count: state.count - 1
			}
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

/* -------------------------------------------------------------- */

// Redux Store
const store = createStore(reducer)

// .subscribe -> Subscribing to the redux store
const unsubscribe = store.subscribe(() => {})

// .getState -> Get the current state of the redux store
console.log(store.getState())

// .dispatch -> Dispatch actions to cause state updates
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(display())

console.log(store.getState())

store.dispatch(decrementCounter())
store.dispatch(hide())

console.log(store.getState())

unsubscribe()


