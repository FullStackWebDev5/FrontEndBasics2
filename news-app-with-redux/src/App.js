import { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import NewsList from './components/NewsList/NewsList'
import SingleNews from './components/SingleNews'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	const [news, setNews] = useState([])
	useEffect(() => {
		axios.get('https://newsapi.org/v2/top-headlines?apiKey=6d36a43e2ab643af9f2a95f64b8bf2cc&country=in').then((response) => setNews(response.data.articles)).catch((error) => console.log(error))
	})

  return (
    <div className="App">
      <Router>
				<Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route 
						path='/news-list' 
						element={
							<NewsList news={news} />
						} 
					/>
					<Route 
						path='/news/:index' 
						element={
							<SingleNews news={news} />
						} 
					/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
