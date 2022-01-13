import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function AddCountryForm() {
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
              id="countryName"
              placeholder="Enter Country Name"
            ></input>
          </div>
          <div class="form-group">
            <label>Country Code</label>
            <input
              class="form-control"
              id="countryCode"
              placeholder="Enter 3 Letter Country Code in Capital Letters"
            ></input>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCountryForm;
