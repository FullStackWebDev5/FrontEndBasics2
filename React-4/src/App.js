import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
// import Photos from "./components/Photos/Photos";
// import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      {/* <Photos /> */}
      {/* <Login /> */}
      <Signup />
    </div>
  );
};

export default App;
