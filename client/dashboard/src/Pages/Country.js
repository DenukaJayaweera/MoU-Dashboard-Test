import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import CountryTable from '../Tables/CountryTable';

function Country() {
  return (
    <div>
      <div className="row">
        <Link to="form">
          <button className="btn btn-primary">Add Country</button>
        </Link>
      </div>
      <div className="row">
        <CountryTable />
      </div>
    </div>
  );
}
export default Country;
