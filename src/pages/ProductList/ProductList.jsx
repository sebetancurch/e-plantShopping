import "./ProductList.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/CartSlice";
import { useState } from "react";

function ProductList() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [list, setList] = useState(items);
  const [categoryInput, setCategoryInput] = useState("");
  const [plantInput, setPlantInput] = useState("");

  const handleAddToCart = (category, plant) => {
    // Add the item to the cart
    dispatch(addItem({ category, plant }));
  };

  const handleCategorySearch = (category) => {
    setPlantInput("");
    // Handle category search
    const filteredItems = items.filter((item) =>
      item.category.toLowerCase().includes(category.toLowerCase())
    );
    setList(filteredItems);
    setCategoryInput(category);
  };

  const handlePlantSearch = (plant) => {
    // Handle plant search
    setCategoryInput("");
    const filteredItems = [];
    for (const item of items) {
      const filteredPlants = item.plants.filter((p) =>
        p.name.toLowerCase().includes(plant.toLowerCase())
      );
      if (filteredPlants.length > 0) {
        filteredItems.push({ ...item, plants: filteredPlants });
      }
    }
    setList(filteredItems);
    setPlantInput(plant);
  };

  return (
    <>
      <div className="search-bar">
        <div className="input-block">
          <label htmlFor="categorySearch">Category</label>
          <input
            type="text"
            id="categorySearch"
            name="categorySearch"
            placeholder="Search by Category"
            value={categoryInput}
            onChange={(e) => handleCategorySearch(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="plantSearch">Plant</label>
          <input
            type="text"
            id="plantSearch"
            name="plantSearch"
            placeholder="Search by Plant"
            value={plantInput}
            onChange={(e) => handlePlantSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="product-grid">
        {list.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="category-title">{category.category}</h2>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <button
                  key={plantIndex}
                  className={`product-card ${plant.selected ? "in-cart" : ""}`}
                  onClick={() => handleAddToCart(category.category, plant)}
                >
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />
                  <div className="product-title">{plant.name}</div>
                  <p>{plant.description}</p>
                  <div className="product-price">{plant.cost}</div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
