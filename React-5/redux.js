const redux = require('redux');
const reduxLogger = require('redux-logger')

const { createStore, combineReducers, applyMiddleware } = redux
const { createLogger } = reduxLogger

// ACTIONS

// Action Type Constants
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

const DISPLAY = 'DISPLAY'
const HIDE = 'HIDE'

const ADD_TECHNOLOGY = 'ADD_TECHNOLOGY'

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
const incrementCounter = (count) => ({
  type: INCREMENT_COUNTER,
	payload: count
});

const decrementCounter = (count) => ({
  type: DECREMENT_COUNTER,
	payload: count
});

const display = () => ({
  type: DISPLAY,
});

const hide = () => ({
  type: HIDE,
});

const addTechnology = (technology) => ({
	type: ADD_TECHNOLOGY,
	payload: technology
})
/* -------------------------------------------------------------- */

// REDUCER FUNCTION
/*
	REDUCER
	- Create an initial state
	- It has two parameters - prevState, action
	- Contains logic to return updated state on basis of prevState and action
*/

const countInitialState = {
	count: 0,
}

const countReducer = (state = countInitialState, action) => {
	switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}


let showInitialState = {
	show: false
}

const showReducer = (state = showInitialState, action) => {
	switch (action.type) {
    case DISPLAY:
      return {
        ...state,
        show: true,
      };
    case HIDE:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
}


const techStackInitialState = {
	technologiesStack: []
}

const techStackReducer = (state = techStackInitialState, action) => {
	switch (action.type) {
    case ADD_TECHNOLOGY:
      return {
        ...state,
        technologiesStack: [
					...state.technologiesStack, 
					action.payload
				],
      };
    default:
      return state;
  }
}

let rootReducer = combineReducers({
	count: countReducer,
	show: showReducer,
	techStack: techStackReducer,
})

/* -------------------------------------------------------------- */

// Redux Store
const store = createStore(rootReducer, applyMiddleware(createLogger()))

// .subscribe -> Subscribing to the redux store
const unsubscribe = store.subscribe(() => {})

// .getState -> Get the current state of the redux store
// console.log(store.getState())

// .dispatch -> Dispatch actions to cause state updates
store.dispatch(incrementCounter(5))

// console.log(store.getState())

store.dispatch(incrementCounter(10))

// console.log(store.getState())

store.dispatch(display())

// console.log(store.getState())

store.dispatch(decrementCounter(2))

// console.log(store.getState())

store.dispatch(hide())

// console.log(store.getState())

store.dispatch(addTechnology('HTML'))

store.dispatch(addTechnology('CSS'))

unsubscribe()


