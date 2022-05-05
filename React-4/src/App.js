import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import Photos from "./components/Photos/Photos";

const App = () => {
  return (
    <div className="App">
      <NavbarComponent />
      <Photos />
    </div>
  );
};

export default App;
