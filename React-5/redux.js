// ACTIONS

// Action Type Constants
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

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

