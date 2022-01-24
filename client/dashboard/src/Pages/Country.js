import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import CountryTable from '../Tables/CountryTable';

function Country() {
  return (
    <div>
      <div className="row justify-content-end p-3">
        <div className="col-2">
          <Link to="form">
            <button className="btn btn-primary">Add Country</button>
          </Link>
        </div>
      </div>
      <div className="row p-2">
        <CountryTable />
      </div>
    </div>
  );
}
export default Country;
