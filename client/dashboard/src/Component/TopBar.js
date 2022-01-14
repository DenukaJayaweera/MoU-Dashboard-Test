import React from 'react';
import '../Styles/TopBar.css';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <div>
      <nav className="header-nav-bar">
        <div className="header-logo">
          <Link to="/">
            <img
              className="site-logo"
              src="/University_of_Peradeniya_crest-1.png"
              alt="logo"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}
export default TopBar;
