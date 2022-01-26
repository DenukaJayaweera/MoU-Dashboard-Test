import React from 'react';
import '../Styles/table.css';

function FacultyTable() {
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
        <tbody>
          <tr>
            <td scope="col">#</td>
            <td scope="col">Name</td>
            <td scope="col">Email</td>
            <td scope="col">Phone Number</td>
            <td scope="col">Info</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FacultyTable;
