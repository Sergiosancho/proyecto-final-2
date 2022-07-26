import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import NewsFeed from './pages/NewsFeed';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/newsfeed"> Newsfeed </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsfeed" element={<NewsFeed />} />
        <Route path="/errorpage" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
