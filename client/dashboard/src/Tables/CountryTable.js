import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import('../Styles/table.css');

function CountryTable() {
  const [countryList, setCountryList] = useState([]);

  const getCountry = () => {
    Axios.get(`${global.url}/country`).then((response) => {
      setCountryList(response.data);
    });
  };

  useEffect(() => {
    getCountry();
  });

  const renCountryList = (val, key) => {
    return (
      <tr key={key}>
        <td>{key + 1}</td>
        <td>{val.CountryCode}</td>
        <td>{val.CountryName}</td>
        <td>Dlt</td>
      </tr>
    );
  };

  return (
    <div>
      <table class="table table-bordered dbtable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{countryList.map(renCountryList)}</tbody>
      </table>
    </div>
  );
}

export default CountryTable;
