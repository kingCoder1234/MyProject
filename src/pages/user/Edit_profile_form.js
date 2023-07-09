import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchUserById,
  updateUserById,
  getCurrentLoggedinUser,
} from "../../utils";
import Usernavbar from "./Usernavbar";

export default function Edit_profile_form() {
  const navigate = useNavigate();
  const user = fetchUserById(getCurrentLoggedinUser());
  const [updatedUserData, setupdatedUserData] = useState({
    // name: "",
    mobile: "",
    address: "",
    pinCode: "",
    profilePic: "",
  });
  // Form input change handler
  //   const handleChange = (e) => {
  // const { name, value } = e.target;
  // setupdatedUserData((prevData) => ({
  //   ...prevData,
  //   [name]: value,
  // }));
  //   };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const reader = new FileReader();
      reader.onload = () => {
        setupdatedUserData((prevData) => ({
          ...prevData,
          [name]: reader.result,
        }));
      };
      if (files && files[0]) {
        reader.readAsDataURL(files[0]);
      }
    } else {
      setupdatedUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserById(updatedUserData, user.id);
    navigate("/cart/userprofile");
    setupdatedUserData({
      // name: "",
      pinCode: "",
      mobile: "",
      address: "",
      profilePic: "",
    });
  };
  return (
    <div>
      {/* <Usernavbar /> */}
      <div
        className="py-4"
        style={{ width: "40%", margin: "auto", height: "816px" }}
      >
        <form onSubmit={handleSubmit} method="post">
          <div className="my-4">
            {/* <i className='fa fa-user' style={{ fontSize: "60px" }}></i> */}
            <Link to="/cart/userprofile">
              <i className="fa fa-user" style={{ fontSize: "60px" }}></i>
            </Link>
            <h4 style={{ fontWeight: "bold" }}>
              Edit Profile <i className="fa fa-edit"></i>
            </h4>
          </div>
          {/* <div className="form-group my-4">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              type="text"
              name="name"
              value={updatedUserData.name}
              onChange={handleChange}
              className="form-control"
              id="formGroupExampleInput"
              placeholder=" Name"
            />
          </div> */}
          <div className="form-group login-form-group my-4">
            <label htmlFor="exampleInputAddress">Home Address</label>
            <input
              type="text"
              name="address"
              value={updatedUserData.address}
              onChange={handleChange}
              id="exampleInputAddress"
              placeholder="Enter Address"
              className="form-control"
              aria-describedby="textHelp"
            />
          </div>
          <div className="form-group login-form-group my-4">
            <label htmlFor="exampleInputmobile">Mobile Number</label>
            <input
              type="number"
              name="mobile"
              value={updatedUserData.mobile}
              onChange={handleChange}
              id="exampleInputmobile"
              placeholder="Enter Mobile Number"
              className="form-control"
              aria-describedby="numberHelp"
            />
          </div>
          <div className="form-group login-form-group my-4">
            <label htmlFor="exampleInputpinCode">Pin Code</label>
            <input
              type="number"
              name="pinCode"
              value={updatedUserData.pinCode}
              onChange={handleChange}
              id="exampleInputpinCode"
              placeholder="Enter pinCode"
              className="form-control"
              aria-describedby="numberHelp"
            />
          </div>
          <div className="form-group login-form-group my-4">
            <label htmlFor="exampleInputpinCode">
              Upload your Profile picture
            </label>
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={handleChange}
              id="exampleInputprofilePic"
              className="form-control"
              aria-describedby="profilePicHelp"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary my-1"
            style={{ width: "auto" }}
          >
            <strong>Update</strong>
          </button>
          <span className="warningIfAccoundExits"></span>
        </form>
      </div>
    </div>
  );
}