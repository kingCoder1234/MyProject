import React from "react";
import {
  verifyUser,
  addLoggedInUser,
  fetchUserByEmail,
  verifyAdmin,
} from "../utils";
import { Link, useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { loginSchema } from "./schemas";

export default function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const isVerified = verifyUser(values.email, values.password);
    const user = fetchUserByEmail(values.email);
    if (!user) {
      return alert("Wrong Email or Password!");
    }
    addLoggedInUser(user);
    if (user.isAdmin) {
      //for admin
      navigate("/admin/productData");
    } else {
      //for user
      const LoggedinUserId = fetchUserByEmail(values.email).id;
      localStorage.setItem("LoggedinUserId", JSON.stringify(LoggedinUserId));
      navigate("/shopping");
    }
    return;
  };

  return (
    <div className="py-5 my-4" style={{ width: "50%", margin: "auto" }}>
      <h1 className="modal-title">Welcome!</h1>
      <form onSubmit={handleLoginSubmit}>
        <div className="input-block mt-3">
          <label htmlFor="email" className="input-label my-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="exampleInputEmail1"
            className="form-control"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div className="input-block mt-3">
          <label htmlFor="password" className="input-label my-2">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="exampleInputPassword1"
            className="form-control"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <div className="modal-buttons">
          <button className="input-button btn btn-primary my-4" type="submit">
            Log in
          </button>
        </div>
      </form>
      <span className="warningIfAccoundExits"></span>
      <p className="text-dark">
        Already signup? Go to <Link to="/signup">Sign up</Link> page
      </p>
    </div>
  );
}
