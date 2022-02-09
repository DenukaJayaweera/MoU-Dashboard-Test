import react from 'react';
import FacultyTable from '../Tables/FacultyTable';

import '../Styles/main.css';

function Faculty() {
  return (
    <div>
      <div className="row  p-3">
        <div className="col pageHeader ">Faculties</div>
      </div>
      <div>
        <FacultyTable />
      </div>
    </div>
  );
}

export default Faculty;
