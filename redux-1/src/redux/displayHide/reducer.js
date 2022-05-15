import { TOGGLE_DISPLAY_HIDE } from './action'

const initialState = {
	display: false
}

const displayHideReducer = (state = initialState, action) => {
	switch(action.type) {
		case TOGGLE_DISPLAY_HIDE:
			return {
				...state,
				display: !state.display
			}
		default: 
			return state
	}
}

export default displayHideReducer