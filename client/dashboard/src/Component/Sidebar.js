import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/sidebar.css';
import { Link } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { RiPagesLine } from 'react-icons/ri';
import { FaUsers, FaGlobeAmericas, FaUniversity } from 'react-icons/fa';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { BsDiagram2 } from 'react-icons/bs';

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
        <li>
          <Link to="/country">
            <FaGlobeAmericas className="m-1" />
            Country
          </Link>
        </li>
        <li>
          <Link to="/faculty">
            <FaUniversity className="m-1" />
            Faculty
          </Link>
        </li>
        <li>
          <Link to="/coordinators">
            <BsDiagram2 className="m-1" />
            Coordinators
          </Link>
        </li>
        <li>
          <Link to="/partners">
            <MdOutlinePeopleAlt className="m-1" />
            Partners
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
