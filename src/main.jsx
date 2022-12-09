import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Services from "./views/services";
import HomePage from "./views/homepage";
import ContactUs from "./views/contactUs";
import "./index.css";
import AboutUs from "./views/aboutUs";
import Projects from "./views/projects";
import Blogs from "./views/blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  </BrowserRouter>
);
