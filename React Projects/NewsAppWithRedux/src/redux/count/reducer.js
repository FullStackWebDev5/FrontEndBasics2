import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './action.js'

let initialState = {
	count: 0
}

export const countReducer = (state = initialState, action) => {
	switch(action.type) {
		case INCREMENT_COUNTER: 
			return {
				count: state.count + action.payload
			}
		case DECREMENT_COUNTER:
			return {
				count: state.count - action.payload
			}
		default:
			return state
	}
}