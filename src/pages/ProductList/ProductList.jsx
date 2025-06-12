import { useState, useEffect } from "react";
import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/CartSlice";

function ProductList() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (category, plant) => {
    // Add the item to the cart
    dispatch(addItem({ category, plant }));
  };

  return (
    <div className="product-grid">
      {items.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="category-title">{category.category}</h2>
          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div key={plantIndex} className="product-card">
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />
                <div className="product-title">{plant.name}</div>
                <p>{plant.description}</p>
                <div className="product-price">{plant.cost}</div>
                <button
                  className="product-button"
                  onClick={() => handleAddToCart(category.category, plant)}
                >
                  {plant.selected ? "Remove from Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
