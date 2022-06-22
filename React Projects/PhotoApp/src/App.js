import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Photo from './components/Photo'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App">
			<Navbar />
			<Photo />
    </div>
  );
}

export default App;
