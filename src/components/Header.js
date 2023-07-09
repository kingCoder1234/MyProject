import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserlogOut, fetchUserById, fetchcart, fetchcartList, getCurrentLoggedinUser, getLoggedInUser, getUserCartIndex } from "./../utils";
import { useSelector } from "react-redux";

export default function Header() {
  const count = useSelector((state)=>state.CountReducer)
  const cartData = fetchcart();
  const user = fetchUserById(getCurrentLoggedinUser());
  const mycart = cartData[getUserCartIndex(user?.id)];
  const navigate = useNavigate()
    function Redirect() {
      navigate("/");
      UserlogOut()
    }
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "2" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="brand">
          <h3 style={{ fontWeight: "bold", textShadow: "1px 1px 3px black", color: "white", }} > Shopping here </h3>
        </div>

        <div className=" navbar-collapse">
          <ul className="navbar-nav mr-auto nav-ul"> <li> <Link className="nav-link text-light" to="/"> Home </Link> </li> <li>
            <Link className="nav-link text-light" to="/shopping">Shopping</Link>
          </li>
            <li><Link className="nav-link text-light" to="/about">About Us</Link></li>
          </ul>
        </div>
        <div className="form-inline my-2 my-lg-0" style={{ marginRight: "20px" }}>
          <li>
            {getCurrentLoggedinUser() === null ? <Link className="nav-link text-light" to="/signup">Signup</Link>
              :<div style={{display:"flex"}}>
              <Link className="nav-link text-light mx-2" to="/" ><i className='fa fa-sign-out' onClick={() => { Redirect() }}>log Out</i>
              </Link> 
              <button
          type="button"
          className="btn btn-primary"
          style={{ width: "auto"}}
        >
          <Link style={{ color: "white", textDecoration: "none" }} to="/cart">
            <i className="fa fa-shopping-cart"></i>
            <span className="number">
              {mycart === undefined ? 0 : mycart.data.length}
            </span>
          </Link>
        </button>
              </div>
              }
          </li>
        </div>
      </nav>
    </div>
  );
}


















// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { fetchcartList, getLoggedInUser } from "./../utils";

// export default function Header() {
//   const [isloggedin, setisloggedin] = useState("");
//   setisloggedin(getLoggedInUser());
//   return (
//     <div style={{ position: "sticky", top: "0", zIndex: "2" }}>
//       <nav className="navbar navbar-expand-lg navbar-light bg-dark">
//         <div className="brand">
//           <h3
//             style={{
//               fontWeight: "bold",
//               textShadow: "1px 1px 3px black",
//               color: "white",
//             }}
//           >
//             Shopping here
//           </h3>
//         </div>
//         <div className=" navbar-collapse">
//           <ul className="navbar-nav mr-auto nav-ul">
//             <li>
//               <Link className="nav-link text-light" to="/">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className="nav-link text-light" to="/shopping">
//                 Shopping
//               </Link>
//             </li>
//             <li>
//               <Link className="nav-link text-light" to="/about">
//                 About Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div
//           className="form-inline my-2 my-lg-0"
//           style={{ marginRight: "20px" }}
//         >
//           <li>
//             <Link className="nav-link text-light" to="/signup">
//               Signup
//             </Link>
//           </li>
//         </div>
//       </nav>
//     </div>
//   );
// }
