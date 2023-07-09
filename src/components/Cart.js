import React from "react";
import {
  fetchUserByEmail,
  HandleIncrease,
  HandleDecrease,
  fetchcartById,
  removeCartItem,
  fetchcart,
  fetchUserById,
  getCurrentLoggedinUser,
  getUserCartIndex,
} from "../utils";
import { Link, useNavigate } from "react-router-dom";
import Usernavbar from "../pages/user/Usernavbar";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../state";

export default function Cart() {
  const redirect = useNavigate()
  function RedirectToPayment() {
    redirect("/UserProductList/cart/payment")
  }
  const dispatch = useDispatch();
  const count = useSelector((state) => state.CountReducer)

  const { IncreaseCount, DecreseCount } = bindActionCreators(actionCreator, dispatch)


  const user = fetchUserById(getCurrentLoggedinUser());
  const cartData = fetchcart();
  const mycart = cartData[getUserCartIndex(user.id)];
  var total = 0;
  mycart === undefined ? 0 : mycart.data.map((item) => (total += item.price * item.count));
  return (
    <div>
      <div className="cart-top ">
        <div className="cart-top-left">
          {" "}
          <button
            className="btn btn-primary mx-2 my-4 float-left"
            type="button"
          >
            <Link
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              }}
              to="/UserProductList"
            >
              &larr; Continue Shopping{" "}
            </Link>
          </button>
        </div>
        <div className="  cart-top-mid">
          <h3 className="my-4">
            Total is {total}
            <button
              className="btn btn-primary mx-2"
              type="button"
              onClick={() => alert("Processing for the payment Rs. " + total)}
              style={{ width: "auto" }}
            >
              Pay here &rarr;
            </button>
          </h3>
        </div>
        <div className="cart-top-right float-right ">
          <div className="my- float-right">
            <Link to="/cart/userprofile">
              <i className="fa fa-user user-icon"></i>
            </Link>
            <p>Your profile</p>
          </div>
        </div>
      </div>
      {(mycart === undefined && mycart?.data?.length === 0) ? (
        <h5>
          No items added to cart ! <br />{" "}
        </h5>
      ) : (
        mycart?.data?.map((item, index) => (
          <div className="product-list-container my-4" key={index}>
            <div className="prod-info-main prod-wrap clearfix">
              <div className="row">
                <div className="col-md-5 col-sm-12 col-xs-12">
                  <div className="product-image">
                    <img
                      src={item.url}
                      alt="Product"
                      className="img-responsive"
                    />
                  </div>
                </div>
                <div className="col-md-7 col-sm-12 col-xs-12">
                  <div className="product-detail">
                    <h5 className="name">
                      {item.name} <span>Product Category</span>
                    </h5>
                    <p className="price-container">
                      <span>Price: {item.price}</span>
                    </p>
                    <span className="tag1"></span>
                  </div>

                  <div className="description">
                    <p>{item.description}</p>
                  </div>

                  <div className="product-info smart-form">
                    <div className="row">
                      <div className="col-md-12 my-4">
                        <button
                          id="handleDec"
                          disabled={false}
                          className="btn btn-primary"
                          onClick={() => {
                            HandleDecrease(user.id, item.id)
                            IncreaseCount(1)
                          }}
                        >
                          <strong>-</strong>
                        </button>
                        <input
                          style={{ width: "15%", textAlign: "center" }}
                          type="button"
                          value={item.count}
                        />
                        <button
                          id="handleInc"
                          className="btn btn-primary"
                          onClick={() => {
                            HandleIncrease(user.id, item.id)
                            IncreaseCount(1)
                          }}
                        >
                          <strong>+</strong>
                        </button>
                      </div>

                      <div className="col-md-12">
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            removeCartItem(user.id, item.id)
                            IncreaseCount(1)
                          }}
                        >
                          Remove
                        </button>
                        <button
                          id="handleBuy"
                          className="btn btn-primary"
                        >
                          <Link
                            style={{
                              color: "white",
                              fontWeight: "bold",
                              textDecoration: "none",
                            }}
                            to="/UserProductList/cart/payment"
                            onClick={() => { RedirectToPayment }}
                          >
                            Buy
                          </Link>
                        </button>
                      </div>

                      <div className="col-md-12">
                        <div className="rating">
                          Rating:
                          <label htmlFor="stars-rating-5">
                            <i className="fa fa-star text-danger"></i>
                          </label>
                          <label htmlFor="stars-rating-4">
                            <i className="fa fa-star text-danger"></i>
                          </label>
                          <label htmlFor="stars-rating-3">
                            <i className="fa fa-star text-danger"></i>
                          </label>
                          <label htmlFor="stars-rating-2">
                            <i className="fa fa-star text-warning"></i>
                          </label>
                          <label htmlFor="stars-rating-1">
                            <i className="fa fa-star text-warning"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
