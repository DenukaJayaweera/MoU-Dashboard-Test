import React, { useEffect, useState } from 'react';
import Axios from 'axios';

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

  const renderCountryList = (val, key) => {
    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{val.CountryCode}</td>
        <td>{val.CountryName}</td>
      </tr>
    );
  };

  return (
    <div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col-1">#</th>
            <th scope="col-3">Code</th>
            <th scope="col-4">Name</th>
          </tr>
        </thead>
        <tbody>{countryList.map(renderCountryList)}</tbody>
      </table>
    </div>
  );
}

export default CountryTable;
