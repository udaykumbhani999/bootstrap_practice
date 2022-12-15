import React from "react";
import "../Form/Form.scss";

const Form = () => {
  return (
    <form className="form_fillup">
      <div className="container">
        <div className="form_wrapper">
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Message"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">First and last name</span>
          <input type="text" aria-label="First name" class="form-control" />
          <input type="text" aria-label="Last name" class="form-control" />
        </div>
        <div class="col-12 mb-3">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-12 mb-3">
          <label for="inputAddress2" class="form-label">
            Address 2
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="col-12 mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12 mb-3">
          <button type="submit" class="btn btn-primary">
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
