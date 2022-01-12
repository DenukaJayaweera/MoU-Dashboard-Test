import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/sidebar.css';
import { Link } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { RiPagesLine } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';

function Sidebar() {
  return (
    <div class="sidebar">
      <ul>
        <li>
          <Link to="/">
            <AiFillHome className="m-1" />
            Home
          </Link>
        </li>
        <li>
          <Link to="/mous">
            <RiPagesLine className="m-1" />
            MoUs
          </Link>
        </li>
        <li>
          <Link to="/users">
            <FaUsers className="m-1" />
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
