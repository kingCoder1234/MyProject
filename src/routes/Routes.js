import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Cart from "../components/Cart";
import UserProductList from "../pages/user/UserProductList";
import AddProduct from "../components/AddProduct";
import UserData from "../pages/admin/UserData";
import Signup from "../components/Signup";
import Login from "../components/Login";
import Edit_profile_form from "../pages/user/Edit_profile_form";
import PrivateRouteUser from "./PrivateRouteUser";
import PrivateRouteAdmin from "./PrivateRouteAdmin";
import NotFound from "./../components/NotFound";
import Userprofile from "../pages/user/Userprofile";
import Adminpage from "../pages/admin/Adminpage";
import ProductData from "../pages/admin/ProductData";
import Payment from "../components/Payment";
import { fetchUserById, fetchcart, getCurrentLoggedinUser, getUserCartIndex } from "../utils";
export default function ({ header }) {
  const user = fetchUserById(getCurrentLoggedinUser());
  const cartData = fetchcart();
  const mycart = cartData[getUserCartIndex(user?.id)];
  var total  =0;
  mycart === undefined ? 0 : mycart.data.map((item) => (total += item.price * item.count));
  return (
    <Router>
      {header}
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/shopping" element={<UserProductList />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        {/* for logged in user  */}
        <Route
          exact
          path="/cart"
          element={
            <PrivateRouteUser>
              <Cart />
            </PrivateRouteUser>
          }
        ></Route>
        <Route
          exact
          path="/UserProductList/cart/payment"
          element={
            <PrivateRouteUser>
              <Payment amount={total} />
            </PrivateRouteUser>
          }
        ></Route>
        <Route
          exact
          path="/UserProductList"
          element={
            <PrivateRouteUser>
              <UserProductList />
            </PrivateRouteUser>
          }
        ></Route>
        <Route
          exact
          path="/login/user/Edit_profile_form"
          element={
            <PrivateRouteUser>
              <Edit_profile_form />
            </PrivateRouteUser>
          }
        ></Route>
        <Route
          exact
          path="/cart/userprofile"
          element={
            <PrivateRouteUser>
              <Userprofile />
            </PrivateRouteUser>
          }
        ></Route>
        {/* for logged in Navbar  */}
        <Route
          exact
          path="/login/home"
          element={
            <PrivateRouteUser>
              <Home />
            </PrivateRouteUser>
          }
        ></Route>
        <Route
          exact
          path="/login/userProductlist"
          element={
            <PrivateRouteUser>
              <UserProductList />
            </PrivateRouteUser>
          }
        ></Route>
        <Route
          exact
          path="/login/about"
          element={
            <PrivateRouteUser>
              <About />
            </PrivateRouteUser>
          }
        ></Route>
        {/* for admin login  */}
        <Route
          exact
          path="/admin/addproduct"
          element={
            <PrivateRouteAdmin>
              <AddProduct />
            </PrivateRouteAdmin>
          }
        ></Route>
        <Route
          exact
          path="/admin/userData"
          element={
            <PrivateRouteAdmin>
              <UserData />
            </PrivateRouteAdmin>
          }
        ></Route>
        <Route
          exact
          path="/admin/adminpage"
          element={
            <PrivateRouteAdmin>
              {" "}
              <Adminpage />{" "}
            </PrivateRouteAdmin>
          }
        ></Route>
        <Route
          exact
          path="/admin/productData"
          element={
            <PrivateRouteAdmin>
              {" "}
              <ProductData />{" "}
            </PrivateRouteAdmin>
          }
        ></Route>

        <Route exact path="/notfound" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}
