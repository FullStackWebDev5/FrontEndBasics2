import './App.css';
import ChildComponent from './components/ChildComponent'

function App() {
  return (
    <div className="App">
     <ChildComponent personNo='1' hobbies={['Swimming', 'Jogging']} />
     <ChildComponent personNo='2' hobbies={['Reading', 'Cycling']} />
    </div>
  );
}

export default App;

// props -> Parent Component to the Child Component (One-way data-binding)

// In function based components - you can relate props with parameters