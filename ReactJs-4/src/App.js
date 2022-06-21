import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar';
// import Products from './components/Products'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <div className="App">
      {/* <Navbar />
			<Products /> */}
			<ParentComponent />
    </div>
  );
}

export default App;
