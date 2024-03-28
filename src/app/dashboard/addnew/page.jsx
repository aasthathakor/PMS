"use client";
import React, { useState } from "react";
import axios from "axios";

const AddNewUserForm = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    alternate_phone: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    language: "", 
    role_u_id: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://c757-2405-201-2006-7d89-c4c2-c0a8-72c8-8f7c.ngrok-free.app/admin-add",
        user,
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>New Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-24">
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                name="first_name"
                value={user.first_name}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                name="last_name"
                value={user.last_name}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3 has-validation">
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <div className="invalid-feedback">Please enter email</div>
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="tel"
                className="form-control"
                name="alternate_phone"
                value={user.alternate_phone}
                onChange={handleChange}
                placeholder="Alternate Phone"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                name="city"
                value={user.city}
                onChange={handleChange}
                placeholder="City"
              />
            </div>
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                name="state"
                value={user.state}
                onChange={handleChange}
                placeholder="State"
              />
            </div>
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                name="country"
                value={user.country}
                onChange={handleChange}
                placeholder="Country"
              />
            </div>
            <div className="col-md-3 mb-3">
              <input
                type="text"
                className="form-control"
                name="pincode"
                value={user.pincode}
                onChange={handleChange}
                placeholder="Pincode"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                name="language"
                value={user.language}
                onChange={handleChange}
                placeholder="Language"
              />
            </div>
            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                name="role"
                value={user.role_u_id}
                onChange={handleChange}
                placeholder="Role"
              />
            </div>
          </div>
          
          <div class="d-grid gap-3 d-md-flex ">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-secondary">
              Back{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewUserForm;
