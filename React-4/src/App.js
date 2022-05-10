import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Photos from "./components/Photos/Photos"
import Login from './components/Login'
import SignUpWithValidation from './components/Signup/SignUpWithValidation'
import About from './components/About'
import Contact from './components/Contact'
import Component404 from './components/404'
import PhotoEnlarged from './components/PhotoEnlarged'

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route index element={<Photos />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUpWithValidation />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* Dynamic route (requires param(s)) to be sent after : */}
          <Route path='/photos/:id' element={<PhotoEnlarged />} />
          {/* No-match route */}
          <Route path='*' element={<Component404/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
