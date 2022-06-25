import React from "react";
import Home from "./home";
import "./login/logscr/rgcss.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Rgform() {
  return (
    <div>
      <Home/>
      <div class="container main">
        <div class="row b1">
          <div class="col">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Admission ID
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>
          <div class="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Full Name
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
              />
            </div>
          </div>
          <div class="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                University Roll No
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
              />
            </div>
          </div>
        </div>
        <div class="row  justify-content-md-center b2">
          <div class="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Section Roll No
              </span>
              <input
                type="number"
                name=""
                min="1"
                max="200"
                className="form-control input-secrn"
                placeholder="Username"
                aria-label="Username"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Semester
              </span>

              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Gender
              </span>

              <select class="form-control" id="exampleFormControlSelect1">
                <option selected></option>
                <option>Male</option>
                <option>Female</option>
                <option>Others</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row  justify-content-md-center b3">
          <div class="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Email
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
              />
            </div>
          </div>
          <div class="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Address
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
              />
            </div>
          </div>
        </div>
        <div class="row  justify-content-md-center b4">
          <div class="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Address
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
              />
            </div>
          </div>
          <div class="col-md-3">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                City
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Semester
              </span>

              <select class="form-control" id="exampleFormControlSelect1">
                <option selected>Choose...</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jammu and Kashmir</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row justify-content-md-center b5">
          <div class="col-md-3">
            <div class="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Branch
              </span>

              <select class="form-control" id="exampleFormControlSelect1">
                <option selected>Choose...</option>
                <option>Architecture</option>
                <option>B.Pharma Pradesh</option>
                <option>IT</option>
                <option>Mechanical</option>
                <option>CSE</option>
              </select>
            </div>
          </div>
          <div class="col-md-3">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
                  Zip Code
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>
        </div>
        <div class="row justify-content-md-center b6">
          <div class="col col-md">
            <div class="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                defaultValue="option1"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                I hereby declare that all the information here is correct!
              </label>
            </div>
          </div>
          <div class="col-md-auto">
            <button type="button" class="btn btn-outline-dark">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
