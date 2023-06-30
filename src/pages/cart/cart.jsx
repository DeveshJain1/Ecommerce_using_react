import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { useState } from 'react';

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  async function requestAccount(){
    console.log('Requesting Account....')
    if(window.ethereum){
      console.log('detected')
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const ether = `${totalAmount}`;
        const addr = "0x780c735720a69659e54754c39059BbD9cEec8f61"
        ethers.utils.getAddress(addr);
        const tx = await signer.sendTransaction({
          to: addr,
          value: ethers.utils.parseEther(ether)
        });
        console.log({ ether, addr });
        console.log("tx", tx);
        
        
      }
      catch (error){
        console.log(error.message)
      }
    }
    else{
      console.log("Metamask not detected.")
    }
  }


  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: SHM {totalAmount} </p>
          <button> Continue Shopping </button>
          <button
            onClick={requestAccount}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
