import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <>
      <div className="navbar">
        <h1>Grocery Cart Items Navbar</h1>
        <div>
          🛒<span className="cartCount">{cartCount}</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
