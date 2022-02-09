import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import UsersTable from '../Tables/UsersTable';

function Users() {
  return (
    <div>
      <div className="row  p-3">
        <div className="col pageHeader ">Users</div>
        <div className="col-2">
          <Link to="form">
            <button className="btn btn-primary">Add Users</button>
          </Link>
        </div>
      </div>
      <div className="row p-2">
        <UsersTable />
      </div>
    </div>
  );
}

export default Users;
