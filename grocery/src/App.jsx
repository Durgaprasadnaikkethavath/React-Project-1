import React, { useState } from "react";
import Navbar from "./components/Navbar";
import GroceryList from "./components/GroceryList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  };
  return (
    <>
      <Navbar />
      <GroceryList />
      <Cart />
    </>
  );
};

export default App;
