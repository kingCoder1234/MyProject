import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import TopRoutes from "./routes/Routes";
import Header from "./components/Header";

export default function () {
  return (
    <div className="App">
      <TopRoutes header={<Header />} />
      <Footer />
    </div>
  );
}
