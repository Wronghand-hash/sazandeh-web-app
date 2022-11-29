import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Services from "./views/services";
import HomePage from "./views/homepage";
import ContactUs from './views/contactUs'
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />}></Route>
    </Routes>
  </BrowserRouter>
);
