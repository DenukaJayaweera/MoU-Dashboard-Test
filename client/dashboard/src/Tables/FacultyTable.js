import React from 'react';
import Axios from 'axios';
import '../Styles/table.css';
import { useState, useEffect } from 'react';

function FacultyTable() {
  const [facultyList, setFacultyList] = useState([]);

  const getFaculty = () => {
    Axios.get(`${global.url}/faculty`).then((response) => {
      setFacultyList(response.data);
    });
  };
  useEffect(() => {
    getFaculty();
  });

  const renderFacultyList = (val, key) => {
    return (
      <tr key={key}>
        <td className="col-1">{key + 1}</td>
        <td className="col-1">{val.faculty_name}</td>
        <td className="col-2">{val.email}</td>
        <td className="col-2">{val.phone_number}</td>
        <td className="col-1">Info</td>
      </tr>
    );
  };

  return (
    <div>
      <table class="table table-bordered dbtable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Info</th>
          </tr>
        </thead>
        <tbody>{facultyList.map(renderFacultyList)}</tbody>
      </table>
    </div>
  );
}

export default FacultyTable;
