import React, { useState } from "react";
import {
  addItemToCart,
  fetchProductList,
  fetchUserById,
  fetchcart,
  getCurrentLoggedinUser,
  getUserCartIndex,
} from "../../utils";
import { data } from "../../components/Product";
import "../../components/style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../state";
export default function UserProductList() {
  const dispatch = useDispatch();
  const couting = useSelector((state)=>state.count)
  const {IncreaseCount, DecreseCount} = bindActionCreators(actionCreator,dispatch)

  const navigate = useNavigate();
  const user = fetchUserById(getCurrentLoggedinUser());
  const products = fetchProductList();
  const cartData = fetchcart();
  const mycart = cartData[getUserCartIndex(user?.id)];
  return (
    <div>
      <div style={{ width: "100%", textAlign: "right" }}>
      </div>
      <div>
        {
          data.map((item,index)=>{
            return(
              <div className="product-list-container my-5" key={index}>
              <div className="prod-info-main prod-wrap clearfix">
                <div className="row">
                  <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="product-image">
                      <img
                        src={item.url}
                        alt="194x228"
                        className="img-responsive"
                      />
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <div className="product-deatil">
                      <h5 className="name" style={{ fontSize: "25px" }}>
                        {item.name} <span> : {item.category}</span>
                      </h5>
                      <p className="price-container">
                        <span>price : {item.price}</span>
                      </p>
                      <span className="tag1"></span>
                    </div>
                    <div className="description">
                      <p style={{ fontSize: "14px" }} className="text-dark">
                        {item.description}{" "}
                      </p>
                    </div>
                    <div className="product-info smart-form">
                      <div className="row">
                        <div className="col-md-12">
                          {getCurrentLoggedinUser()===null?" ":
                          <a
                          className="btn btn-danger"
                          onClick={() => {
                            addItemToCart(user.id, item)
                            IncreaseCount(0.1)
                          }}
                        >
                          Add to cart
                        </a>}
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
            )
          })
        }
      </div>
      <div>
        {products.map((item, index) => {
          return (
            <div className="product-list-container my-5" key={index}>
              <div className="prod-info-main prod-wrap clearfix">
                <div className="row">
                  <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="product-image">
                      <img
                        src={item.url}
                        alt="194x228"
                        className="img-responsive"
                      />
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12">
                    <div className="product-deatil">
                      <h5 className="name" style={{ fontSize: "25px" }}>
                        {item.name} <span> : {item.category}</span>
                      </h5>
                      <p className="price-container">
                        <span>price : {item.price}</span>
                      </p>
                      <span className="tag1"></span>
                    </div>
                    <div className="description">
                      <p style={{ fontSize: "14px" }} className="text-dark">
                        {item.description}{" "}
                      </p>
                    </div>
                    <div className="product-info smart-form">
                      <div className="row">
                        <div className="col-md-12">
                          {getCurrentLoggedinUser()===null?" ":
                          <a
                          className="btn btn-danger"
                          onClick={() => {
                            addItemToCart(user.id, item)
                            IncreaseCount(0.1)
                          }}
                        >
                          Add to cart
                        </a>}
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
          );
        })}
      </div>
    </div>
  );
}
