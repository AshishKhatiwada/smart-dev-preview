import React from "react";
import Sectors from "../pages/Sectors";
import ProductList from "./ProductList";
import SupplierForm from "../pages/SupplierForm";
import ContactUs from "../pages/ContactUs";
import Reviews from "../pages/Reviews";
import AboutUs from "../pages/AboutUs";
import Articles from "../pages/Articles";
const MainContent = ({ selected }) => {
  switch (selected) {
    case "Home":     
      return <div className="text-white">Welcome to the Home page!</div>;
    case "Sectors":
      return <Sectors/>;
    case "Products":
      return <ProductList />;
    case "Articles":
      return <Articles />;
    case "Reviews":
      return <Reviews />;
    case "Contact":
      return <ContactUs />;
    case "Join as Supplier":
      return <SupplierForm />;
    case "About Us":
      return <AboutUs />;
    default:
      return <div>Select a menu item above.</div>;
  }
};

export default MainContent;
