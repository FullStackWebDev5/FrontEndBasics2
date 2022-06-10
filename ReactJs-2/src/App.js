import './App.css';
import Hello from './components/Hello'
import HelloClass from './components/HelloClass'

function App() {
  return (
    <div className="App">
      <Hello />
			<HelloClass />
    </div>
  );
}

export default App;

/*
	Components 2 types:
	1. Function based components
	2. Class based components

	Class based components - state and props
	Function based components - props (couldn't have its own state)

	With the coming of 'Hooks' -> Create state in function based components
*/
