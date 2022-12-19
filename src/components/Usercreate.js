
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

function Usercreate() {
  const countries = [
    { id: "1", name: "India" },
    { id: "2", name: "USA" },
  ];
  const states = [
    { id: "1", countryId: "1", name: "Tamil Nadu" },
    { id: "2", countryId: "1", name: "Kerala" },
    { id: "3", countryId: "1", name: "Telegana" },
    { id: "4", countryId: "1", name: "Maharashtra" },
    { id: "5", countryId: "2", name: "Texas" },
    { id: "6", countryId: "2", name: "California" },
  ];

  const cities = [
    { id: "1", stateId: "1", name: "Chennai" },
    { id: "2", stateId: "1", name: "Madurai" },
    { id: "3", stateId:  "1", name: "Coimbatore" },
    { id: "4", stateId:  "1", name: "Trichy" },
    { id: "5", stateId:  "2", name: "Munnar" },
    { id: "6", stateId:  "2", name: "Kochi" },
    { id: "7", stateId:  "2", name: "Thiruvananthapuram" },
    { id: "8", stateId:  "2", name: "Alappuzha" },
    { id: "9", stateId:  "3", name: "	Nizamabad" },
    { id: "10", stateId:  "3", name: "Warangal" },
    { id: "11", stateId:  "3", name: "Hyderabad" },
    { id: "12", stateId:  "3", name: "Khammam" },
    { id: "13", stateId:  "4", name: "Mumbai" },
    { id: "14", stateId:  "4", name: "Pune" },
    { id: "15", stateId:  "4", name: "Thane" },
    { id: "16", stateId:  "4", name: "Nagpur" },
    { id: "17", stateId:  "5", name: "Houston" },
    { id: "18", stateId:  "5", name: " San Antonio" },
    { id: "19", stateId:  "5", name: "Austin" },
    { id: "20", stateId:  "5", name: "Midland" },
    { id: "21", stateId:  "6", name: "San Diego" },
    { id: "22", stateId:  "6", name: "Los Angeles" },
    { id: "23", stateId:  "6", name: "San Francisco" },
    { id: "24", stateId:  "6", name: "Hollywood" }
  ];

  const [country, setCountry] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  useEffect(() => {
    setCountry(countries);
  }, []);

  const handleCountry = (id) => {
    const dt = states.filter((x) => x.countryId === id);
    setState(dt);
  };

  const handleState =(id) =>{
    const dt = cities.filter((x) => x.stateId === id);
    setCity(dt);
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      country: "",
      state: "",
      city: "",
      phone: "",
      dob: "",
      gender: "",
    },
    validate: (values) => {
      let error = {};
      console.log(typeof values.state)
      if (!values.username) {
        error.username = "Please enter the name";
      }

      if (
        values.username &&
        (values.username.length <= 2 || values.username.length > 15)
      ) {
        error.username = "Username must be between 3 to 15 characters";
      }

      if (!values.email) {
        error.email = "Please enter the email";
      }
      //regular expression
      if (
        values.email &&
        !/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/i.test(values.email)
      ) {
        error.email = "Please enter the valid email";
      }

      if (values.phone.toString().length !== 10) {
        error.phone = "Please enter the valid Phone number";
      }

      console.log(values.dob.split("-")[0]);
      console.log(new Date().getFullYear());
      let age = new Date().getFullYear() - values.dob.split("-")[0];
      console.log(age);

      if (!values.dob) {
        error.dob = "Please enter the Date of Birth";
      }

      if (age < 18) {
        error.dob = "You must be above 18";
      }
      return error;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://63463cc5745bd0dbd3791eaf.mockapi.io/usersdata",
          values
        );
        alert("Success");
      } catch (error) {
        alert("Error");
      }
    },
  });
  return (
    <div className="container">
      <div>
        <h2>Create User Form</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>UserName*</label>
              <input
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                type={"text"}
                className={`form-control ${
                  formik.touched.username && formik.errors.username
                    ? "error-box"
                    : ""
                } ${
                  formik.touched.username && !formik.errors.username
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.username && formik.errors.username ? (
                <span style={{ color: "red" }}>{formik.errors.username}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email*</label>
              <input
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type={"email"}
                className={`form-control ${
                  formik.touched.email && formik.errors.email ? "error-box" : ""
                } ${
                  formik.touched.email && !formik.errors.email
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <select
                id="ddlCountry"
                name="country"
                onClick={(e) => handleCountry(e.target.value)}
                onChangeCapture={formik.handleChange}
                value={formik.values.country}
                className="form-control"
              >
                <option value="0">Select Country</option>
                {country && country !== undefined
                  ? country.map((ctr, index) => {
                      return (
                        <option key={index} value={ctr.id}>
                          {ctr.name}
                        </option>
                      );
                    })
                  : "No country"}
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>State</label>
              <select
                id="ddlStates"
                name="state"
                onChangeCapture={formik.handleChange}
                onClick={(e) => handleState(e.target.value)}
                value={formik.values.state}
                className="form-control"
              >
                <option value="0">Select State</option>
                {state && state !== undefined
                  ? state.map((ctr, index) => {
                      return (
                        <option key={index} value={ctr.id}>
                          {ctr.name}
                        </option>
                      );
                    })
                  : "No State"}
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>City</label>
              <select
                id="ddlCities"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                className="form-control"
              >
               <option value="0">Select City</option>
                {city && city !== undefined
                  ? city.map((ctr, index) => {
                      return (
                        <option key={index} value={ctr.id}>
                          {ctr.name}
                        </option>
                      );
                    })
                  : "No city"}
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone No*</label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type={"number"}
                className={`form-control ${
                  formik.touched.phone && formik.errors.phone ? "error-box" : ""
                } ${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Date of Birth*</label>
              <input
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                type={"date"}
                min={"1980-01-01"}
                className={`form-control ${
                  formik.touched.dob && formik.errors.dob ? "error-box" : ""
                } ${
                  formik.touched.dob && !formik.errors.dob
                    ? "success-box"
                    : null
                }`}
              />
              {formik.touched.dob && formik.errors.dob ? (
                <span style={{ color: "red" }}>{formik.errors.dob}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className="form-control"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Transgender</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input type={"submit"} className="btn btn-success" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Usercreate;
