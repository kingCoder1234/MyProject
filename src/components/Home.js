import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="homepage bg-dark bg-opacity">
      <div className="content">
        <div className="home-text-container">
          <h1>Shop With Us </h1>
          <p>
            This is my shopping website shop here This is my shopping website
            shop here
          </p>
          <div className="home-page-btn btn">
            <button type="button" className="btn1">
              SHOP NOW{" "}
            </button>
            <button type="button" className="btn2">
              CLUB MEMBERSHIP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
