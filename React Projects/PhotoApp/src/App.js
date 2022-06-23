import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Photo from "./components/Photos/Photo";
import About from "./components/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
				<Routes>
					<Route path='/' element={<Photo />} />
					<Route path='/about' element={<About />} />
				</Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
