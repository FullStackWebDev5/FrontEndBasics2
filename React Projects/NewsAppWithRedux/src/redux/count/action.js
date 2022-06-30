export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const incrementCounter = (count = 1) => ({
	type: INCREMENT_COUNTER,
	payload: count
})

export const decrementCounter = (count = 1) => ({
	type: DECREMENT_COUNTER,
	payload: count
})
