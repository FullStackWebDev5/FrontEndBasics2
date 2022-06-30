import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList/NewsList";
import SingleNews from "./components/SingleNews";
import Count from "./components/Count";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/news/:id" element={<SingleNews />} />
          <Route path="/count" element={<Count />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
