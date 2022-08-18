import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">
          <img
            src="/favicon.jpeg"
            alt="logo"
            style={{ height: "100%", objectFit: "contain" }}
          />
        </Link>
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "36px",
        }}
      >
        Zebrucks
      </div>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
