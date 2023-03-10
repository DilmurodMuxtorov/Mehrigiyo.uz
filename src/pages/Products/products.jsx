import React from "react";
import ProductHero from "./ProductHero/ProductHero";
import ProductsHeader from "../../components/product-header/header";
import Footer from "../Home/_components/footer/footer";
import ProductCard from "./ProductCard/ProductCard";

const Products = () => {
  return (
    <div>
      <ProductsHeader />
      <ProductHero />
      <ProductCard />
      <Footer />
    </div>
  );
};

export default Products;
