import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Users from './Pages/Users';
import MoUs from './Pages/MoUs';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/users"> Users </Link>
        <Link to="/mous"> MoUs </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/mous" element={<MoUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
