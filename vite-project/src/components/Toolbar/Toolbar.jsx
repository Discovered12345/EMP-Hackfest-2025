import { Link, useLocation } from 'react-router-dom';
import './Toolbar.css';

const Toolbar = () => {
  const location = useLocation();

  return (
    <div className="toolbar">
      <div className="toolbar-content">
        <div className="toolbar-left">
          <Link to="/" className="toolbar-brand">
            Sky Scanner
          </Link>
        </div>
        <div className="toolbar-links">
          <a 
            href="/map" 
            className={`toolbar-link ${location.pathname === '/map' ? 'active' : ''}`}
          >
            Map
          </a>
          <Link 
            to="/info" 
            className={`toolbar-link ${location.pathname === '/info' ? 'active' : ''}`}
          >
            About
          </Link>
          <Link 
            to="/health-risk" 
            className={`toolbar-link ${location.pathname === '/health-risk' ? 'active' : ''}`}
          >
            Health Risk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Toolbar; 