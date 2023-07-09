import React from "react";
import { Link } from "react-router-dom";
import { fetchUserById, getCurrentLoggedinUser } from "../../utils";
import Usernavbar from "./Usernavbar";

export default function Userprofile() {
  const user = fetchUserById(getCurrentLoggedinUser());
  return (
    // <Usernavbar />
    <div className="container mt-5">
      <div className="row d-flex justify-content-center py-5">
        <div className="col-md-7">
          <div className="card1 py-4">
            <div className="text-center">
              <img
                src={user.profilePic}
                alt="Loading..."
                width="100"
                className="rounded-circle"
              />
            </div>
            <div className="text-center mt-3">
              <h5 className="mt-2 mb-0"> {user.name}</h5>
              <ul className="social-list">
                <li>Email Id : {user.email}</li>
                <li>Mobile No : {user.mobile} </li>
                <li>Address : {user.address}</li>
                <li>Pin Code : {user.pinCode}</li>
              </ul>
              <div className="buttons">
                <button className="btn btn-outline-primary px-4">
                  {" "}
                  <Link className="back-to-cart" to="/cart">
                    Back To Cart
                  </Link>{" "}
                </button>
                <button className="btn btn-primary px-4 ms-3">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/login/user/Edit_profile_form"
                  >
                    Update Profile
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
