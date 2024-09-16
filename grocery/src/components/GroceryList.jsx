import React from "react";

const GroceryList = ({ addToCart }) => {
  const groceryList = [
    { id: 1, name: "butter", price: 5 },
    { id: 2, name: "milk", price: 4 },
    { id: 3, name: "bread", price: 2 },
  ];
  return (
    <>
      <div>
        <h1>Grocery List</h1>
        <ul>
          {groceryList.map((item) => {
            return (
              <li>
                {item.name}-${item.price}
                <button on onClick={() => addToCart(item)}>
                  AddToCart
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default GroceryList;
