import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import _ from 'lodash';

import ReactCountryFlag from 'react-country-flag';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaInfo } from 'react-icons/fa';

import('../Styles/table.css');

const pageSize = 6;

function CountryTable() {
  const [countryList, setCountryList] = useState([]);
  const [paginationCountry, setPaginationCountry] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getCountry = () => {
    Axios.get(`${global.url}/country`).then((response) => {
      setCountryList(response.data);
      setPaginationCountry(_(response.data).slice(0).take(pageSize).value());
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

  const pageCount = countryList ? Math.ceil(countryList.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNum) => {
    setCurrentPage(pageNum);
    const startIndex = (pageNum - 1) * pageSize;
    const paginatedCountry = _(countryList)
      .slice(startIndex)
      .take(pageSize)
      .value();
    setPaginationCountry(paginatedCountry);
  };

  const renCountryList = (val, key) => {
    return (
      <tr key={key}>
        <td className="col-1">{key + 1}</td>
        <td className="col-1">
          <ReactCountryFlag
            countryCode={`${val.CountryCode}`}
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
            }}
          />
        </td>
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
            <th scope="col">Flag</th>
            <th scope="col">Code</th>
            <th scope="col">Country Name</th>
            <th scope="col">Delete</th>
            <th scope="col">Info</th>
          </tr>
        </thead>
        <tbody>{paginationCountry.map(renCountryList)}</tbody>
      </table>
      <nav className="d-flex justify-content-center">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? 'page-item active' : 'page-item'
              }
            >
              <p
                className="page-link"
                onClick={() => {
                  pagination(page);
                }}
              >
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default CountryTable;
