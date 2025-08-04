import React from "react";
import Sectors from "./Sectors";
import ProductList from "./ProductList";
const MainContent = ({ selected }) => {
  switch (selected) {
    case "Home":
      return <div>Welcome to the Home page!</div>;
    case "Sectors":
      return <Sectors/>;
    case "Products":
      return <ProductList />;
    case "Articles":
      return <div>Read our latest Articles.</div>;
    case "Supplier":
      return <div>Supplier information and application.</div>;
    case "Affiliate":
      return <div>Affiliate program details.</div>;
    case "Reviews":
      return <div>Customer Reviews and feedback.</div>;
    case "Contact":
      return <div>Contact us page content.</div>;
    default:
      return <div>Select a menu item above.</div>;
  }
};

export default MainContent;
