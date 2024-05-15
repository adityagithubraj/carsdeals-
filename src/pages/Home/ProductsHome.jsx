import React from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ProductGridHome from "./ProductGridHome";

function ProductsHome() {
  return (
    <div className="container mx-auto pt-[6rem]">
      <SectionHeading
        head="Let's get started"
        subtext="Discover a wide range of new and pre-owned vehicles"
      />
      <ProductGridHome />
    </div>
  );
}

export default ProductsHome;
