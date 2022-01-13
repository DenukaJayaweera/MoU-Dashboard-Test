import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';

import '../Global/globalvariables';

function AddCountryForm() {
  const [Country, setCountry] = useState('');
  const [CountryCode, setCountryCode] = useState('');

  const submitCountry = () => {
    Axios.post(`${global.url}/country/insert`, {
      countryName: Country,
      countryCode: CountryCode,
    }).then(() => {
      alert('Succesful Insert');
    });
  };

  return (
    <div>
      <div>
        <h1>This is the Country adding form</h1>
      </div>
      <div>
        <form>
          <div class="form-group">
            <label>Country</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter Country Name"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            ></input>
          </div>
          <div class="form-group">
            <label>Country Code</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter 3 Letter Country Code in Capital Letters"
              onChange={(e) => {
                setCountryCode(e.target.value);
              }}
            ></input>
          </div>
          <button type="submit" class="btn btn-primary" onClick={submitCountry}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCountryForm;
