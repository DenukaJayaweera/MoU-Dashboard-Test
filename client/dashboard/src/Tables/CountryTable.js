import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { AiOutlineDelete } from 'react-icons/ai';
import { FaInfo } from 'react-icons/fa';

import('../Styles/table.css');

function CountryTable() {
  const [countryList, setCountryList] = useState([]);

  const getCountry = () => {
    Axios.get(`${global.url}/country`).then((response) => {
      setCountryList(response.data);
    });
  };

  const deleteCountry = (countryCode) => {
    Axios.delete(`${global.url}/country/delete/${countryCode}`).then(
      (response) => {
        if (response.status === 500) {
          console.log(response.status);
        }
      }
    );
  };

  useEffect(() => {
    getCountry();
  });

  const renCountryList = (val, key) => {
    return (
      <tr key={key}>
        <td className="col-1">{key + 1}</td>
        <td className="col-2">{val.CountryCode}</td>
        <td>{val.CountryName}</td>
        <td className="col-1">
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteCountry(val.CountryCode);
            }}
          >
            <AiOutlineDelete size={24} />
          </button>
        </td>
        <td className="col-1">
          <button className="btn btn-primary">
            <FaInfo size={20} />
          </button>
        </td>
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
            <th scope="col">Country Name</th>
            <th scope="col">Delete</th>
            <th scope="col">Info</th>
          </tr>
        </thead>
        <tbody>{countryList.map(renCountryList)}</tbody>
      </table>
    </div>
  );
}

export default CountryTable;
