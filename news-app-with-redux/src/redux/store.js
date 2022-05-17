import { createStore } from 'redux'
import newsReducer from './news/reducer'

const store = createStore(newsReducer)

export default store