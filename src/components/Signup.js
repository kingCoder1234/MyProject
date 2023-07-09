import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { addUserList, fetchUserByEmail } from "../utils";
import { signupSchema } from "./schemas";

export default function Signup() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: signupSchema,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: (values, action) => {
      const user = addUserList({ ...values, isAdmin: false });

      if (fetchUserByEmail(values.email)) {
        alert("Signup Successful");
        navigate("/login");
      } else {
        //will see in future
      }
      action.resetForm();
    },
  });

  return (
    <div
      className="py-4"
      style={{ width: "50%", margin: "auto", height: "600px" }}
    >
      <form onSubmit={formik.handleSubmit}>
        <div className="my-4">
          <h4 style={{ fontWeight: "bold" }}>Create your account</h4>
        </div>
        <div className="form-group my-4">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-control ${
              formik.touched.name && formik.errors.name ? "is-invalid" : ""
            }`}
            id="formGroupExampleInput"
            placeholder="name"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="invalid-feedback">{formik.errors.name}</div>
          )}
        </div>
        <div className="form-group login-form-group my-4">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-control ${
              formik.touched.email && formik.errors.email ? "is-invalid" : ""
            }`}
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="invalid-feedback">{formik.errors.email}</div>
          )}
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group login-form-group my-4">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`form-control ${
              formik.touched.password && formik.errors.password
                ? "is-invalid"
                : ""
            }`}
            id="exampleInputPassword1"
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="invalid-feedback">{formik.errors.password}</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary my-1">
          <strong>Sign up</strong>
        </button>
        <span className="warningIfAccountExists"></span>
        <p className="text-dark">
          Already signed up? Go to <Link to="/login">login</Link> page{" "}
        </p>
      </form>
    </div>
  );
}

// import React, { useState } from 'react';
// import { Link, useNavigate } from "react-router-dom";
// import { addUserList, fetchUserByEmail } from '../utils';

// export default function AddProduct() {
//     const navigate = useNavigate();

//     const [newUserData, setnewUserData] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     // Form input change handler
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setnewUserData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }));
//     };

//     // Form submission handler
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const user = addUserList({ ...newUserData, isAdmin: false });

//         if (fetchUserByEmail(newUserData.email)) {
//             navigate("/login");
//             alert("Signup Successfully")
//         }
//         else {
//             //in future...
//         }
//         setnewUserData({
//             name: '',
//             email: '',
//             password: ''
//         })
//     };

//     return (
//         <div className='py-4' style={{ width: "50%", margin: "auto", height: "600px" }}>
//             <form onSubmit={handleSubmit}>
//                 <div className='my-4'>
//                     <h4 style={{ fontWeight: "bold" }}>Create your account</h4>
//                 </div>
//                 <div className="form-group my-4">
//                     <label htmlFor="formGroupExampleInput">Name</label>
//                     <input
//                         type="text"
//                         name='name'
//                         value={newUserData.name}
//                         onChange={handleChange}
//                         className="form-control"
//                         id="formGroupExampleInput"
//                         placeholder=" name" />
//                 </div>
//                 <div className="form-group login-form-group my-4">
//                     <label htmlFor="exampleInputEmail1">Email address</label>
//                     <input
//                         type="email"
//                         name='email'
//                         value={newUserData.email}
//                         onChange={handleChange}
//                         id="exampleInputEmail1"
//                         placeholder="Enter email"
//                         className="form-control" aria-describedby="emailHelp" />
//                     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//                 </div>
//                 <div className="form-group login-form-group my-4">
//                     <label htmlFor="exampleInputPassword1">Password</label>
//                     <input
//                         type="password"
//                         name='password'
//                         value={newUserData.password}
//                         onChange={handleChange}
//                         className="form-control"
//                         id="exampleInputPassword1"
//                         placeholder="Password" />
//                 </div>
//                 <button type="submit" className="btn btn-primary my-1"><strong>Sign up</strong></button>
//                 <span className='warningIfAccoundExits'></span>
//                 <p className='text-dark'>Already signup? Go to <Link to='/login'>login</Link> page </p>

//             </form>
//         </div>
//     );
// }
