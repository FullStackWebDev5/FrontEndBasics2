import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts/Posts";
import About from "./components/About"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
				<Routes>
					<Route path='/' element={<Posts />} />
					<Route path='/about' element={<About />} />
				</Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
