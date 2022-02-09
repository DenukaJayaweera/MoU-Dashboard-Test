import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import { FaInfo } from 'react-icons/fa';
import('../Styles/table.css');

function UsersTable() {
  const [userList, setUserList] = useState([]);

  const getUser = () => {
    Axios.get(`${global.url}/users`).then((response) => {
      setUserList(response.data);
    });
  };

  useEffect(() => {
    getUser();
  });

  const renderUserList = (val, key) => {
    return (
      <tr key={key}>
        <td className="col-1">{key + 1}</td>
        <td className="col-2">{val.first_name}</td>
        <td className="col-2">{val.last_name}</td>
        <td className="col-2">{val.role_name}</td>
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
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Role</th>
            <th scope="col">Info</th>
          </tr>
        </thead>
        <tbody>{userList.map(renderUserList)}</tbody>
      </table>
    </div>
  );
}

export default UsersTable;
