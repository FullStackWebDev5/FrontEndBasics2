import './App.css';
import Counter from './components/Counter'
import DisplayHide from './components/DisplayHide'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <div className="App">
			<Provider store={store}>
				<Counter />
				<DisplayHide />
			</Provider>
    </div>
  );
}

export default App;

/* 
	Steps to create and connect redux to react -
		1. Store
		2. Reducer
		3. Action type and action creators
		4. Complete reducer and store
		5. Pass redux store as props to Provider component (made as parent component of entire React application)
		6. mapStateToProps (state), mapDispatchToProps (dispatch), connect
		7. destructure the state/action from props, and then use it in the component
*/

/*
	Provider - React-redux component to be made as the parent component of entire react application, and pass the redux store as props
*/