import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Carousels } from "../../components/carousel";  
export const Shop = () => {
  return (
    <>
    <Carousels/>
      <div className="space"></div>
      <h1 style={{textAlign:`center`,paddingBottom:`2rem`}}>Our Products</h1>
      <div className="shop">
        <div className="products">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </>

  );
};
