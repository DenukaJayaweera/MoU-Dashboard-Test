import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import Users from './Pages/Users';
import MoUs from './Pages/MoUs';
import ErrorPage from './Pages/ErrorPage';
import Country from './Pages/Country';
import Faculty from './Pages/Faculty';
import Partners from './Pages/Partners';
import Coordinators from './Pages/Coordinators';

import Sidebar from './Component/Sidebar';
import TopBar from './Component/TopBar';

function App() {
  return (
    <Router>
      <div className="row">
        <TopBar />
      </div>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/mous" element={<MoUs />} />
            <Route path="/country" element={<Country />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/coordinators" element={<Coordinators />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
