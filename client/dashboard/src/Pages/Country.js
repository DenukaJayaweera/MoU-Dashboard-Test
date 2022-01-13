import React from 'react';

import AddCountryForm from '../Forms/AddCountryForm';
import CountryTable from '../Tables/CountryTable';

function Country() {
  return (
    <div>
      <div className="row">
        <AddCountryForm />
      </div>
      <div className="row">
        <CountryTable />
      </div>
    </div>
  );
}
export default Country;
