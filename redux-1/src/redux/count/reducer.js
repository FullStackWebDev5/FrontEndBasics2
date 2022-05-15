import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './action'

const initialState = {
	count: 0
}

const countReducer = ( state = initialState, action ) => {
	switch(action.type){
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

export default countReducer