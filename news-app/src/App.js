import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import NewsList from './components/NewsList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/news-list' element={<NewsList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
