import "./App.css";
import ChildComponent1 from './components/ChildComponent1/ChildComponent1'
import ChildComponent2 from './components/ChildComponent2'

const App = () => {
  return (
    <div className="App">
			<h1>App</h1>
			<ChildComponent1 />
			<ChildComponent2 />
		</div>
  );
};

export default App;

/* 
	Components -
	Types:
	1. Class Based Components
	2. Function Based Components

	- Components can be considered as sub-sections (Small UI Pieces) inside the entire application
	- Returns JSX (JavaScript + XML)
	- Can be Nested
	- Can be Re-Used

	Fragments - Empty JSX tags (Used for nesting multiple elements inside a single parent to be returned by the component)

	React follow 'One-way binding'

	A component re-renders whenever there is a change in
	1. props
	- Data which is passed from the parent component down to the child component
	- Relate this with parameters in function based components

















	/ ---------------------------------------------------------------- /
	
	JSON - JavaScript Object Notation
	{
		name: 'Vaibhav',
		batch: 10
	}

	XML - Extensible Markup Language
	<student>
		<name>
			Vaibhav
		</name>
		<batch>
			10
		</batch>
	</student>
*/
