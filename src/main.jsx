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
import Shop from "./views/shop";
import AdminPage from "./views/admin.jsx";
import InstallmentSales from "./views/installmentSales";
import Catalogs from "./views/catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./views/checkout";
import Profile from "./views/profile";
import NewsPage from "./views/newPage";
import News from "./views/news";
import Service from "./views/service";

import ProjectEstimate from "./views/projectEstimate";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/services/service" element={<Service />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/newsitem" element={<News />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/catalogs" element={<Catalogs />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/ProjectEstimate" element={<ProjectEstimate />} />

      <Route path="/installmentSales" element={<InstallmentSales />} />
    </Routes>
  </BrowserRouter>
);
