import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import MapPage from './pages/MapPage';
import Info from './components/Info/Info';
import Toolbar from './components/Toolbar/Toolbar';
import HealthRisk from './components/HealthRisk/HealthRisk';
import './App.css';

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="app">
      {!isLandingPage && <Toolbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/info" element={<Info />} />
        <Route path="/health-risk" element={<HealthRisk />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper; 
