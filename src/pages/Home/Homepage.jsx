import React from "react";
import { useEffect } from "react";
import HomeBanner from "./HomeBanner";
import Process from "./Process";
import ProductGridHome from "./ProductsHome";
import Reviews from "./Reviews";

function Homepage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeBanner />
      <Process />
      <ProductGridHome />
      <Reviews />
    </>
  );
}

export default Homepage;
