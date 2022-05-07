import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
// import Photos from "./components/Photos/Photos"
// import Login from './components/Login'
// import Signup from './components/Signup/Signup'
import SignUpWithValidation from './components/Signup/SignUpWithValidation'

const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      {/* <Photos /> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      <SignUpWithValidation />
    </div>
  );
};

export default App;
