import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewsList from "./components/NewsList";
import SingleNews from "./components/SingleNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
					<Container>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/news-list" element={<NewsList />} />
            <Route path="/news/:index" element={<SingleNews />} />
          </Routes>
					</Container>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
