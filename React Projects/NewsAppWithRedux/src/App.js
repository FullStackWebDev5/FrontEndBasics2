import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import NewsList from "./components/NewsList/NewsList";
import SingleNews from "./components/SingleNews";
import Count from "./components/Count";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import store from './redux/store'

const App = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let res = await axios.get(
          "https://newsapi.org/v2/top-headlines?apiKey=6d36a43e2ab643af9f2a95f64b8bf2cc&country=in"
        );
        setNewsList(res.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewsList newsList={newsList} />} />
          <Route
            path="/news/:id"
            element={<SingleNews newsList={newsList} />}
          />
          <Route path="/count" element={<Count />} />
        </Routes>
        <NewsList />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
