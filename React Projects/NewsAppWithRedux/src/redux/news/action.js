import axios from 'axios'

export const FETCH_NEWS_REQUESTED = 'FETCH_NEWS_REQUESTED'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR'

export const fetchNewsRequested = () => ({
	type: FETCH_NEWS_REQUESTED
})

export const fetchNewsSuccess = (newsList) => ({
	type: FETCH_NEWS_SUCCESS,
	payload: newsList
})

export const fetchNewsError = (errorMessage) => ({
	type: FETCH_NEWS_ERROR,
	payload: errorMessage
})

/* 
	Redux-Thunk - Async Redux State Updates
	- Access to getState
	- Access to dispatch
	- Make async API calls
*/

export const fetchNews = () => {
	return async (dispatch, getState) => {
		try {
			dispatch(fetchNewsRequested())
			let res = await axios.get('https://newsapi.org/v2/top-headlines?apiKey=6d36a43e2ab643af9f2a95f64b8bf2cc&country=in')
			dispatch(fetchNewsSuccess(res.data.articles))
		} catch (error) {
			dispatch(fetchNewsError(error.message))
		}
	}
}
