import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "@/redux/CartSlice";
import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  const cart = useSelector((state) => state.cart.items).reduce((acc, item) => {
    const selectedCategoryItems = item.plants.filter((plant) => plant.selected);
    if (selectedCategoryItems && selectedCategoryItems.length > 0) {
      return [...acc, ...selectedCategoryItems];
    }
    return acc;
  }, []);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const totalAmount = cart.reduce((total, item) => {
    const costNumber = Number(item.cost.replace(/[^0-9.]/g, ""));
    return total + costNumber * item.quantity;
  }, 0);

  const handleIncrement = (plant) => {
    dispatch(updateQuantity({ plant, isIncrease: true }));
  };

  const handleDecrement = (plant) => {
    dispatch(updateQuantity({ plant, isIncrease: false }));
  };

  const handleRemove = (plant) => {
    dispatch(removeItem({ plant }));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    const costNumber = Number(item.cost.replace(/[^0-9.]/g, ""));
    return costNumber * item.quantity;
  };

  const handleCheckout = () => {
    alert("Functionality to be added for future reference");
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: "black" }}>
        Total Cart Amount: $
        {Number.isNaN(totalAmount) ? 0 : totalAmount.toFixed(2)}
      </h2>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">
                  {item.quantity}
                </span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ marginTop: "20px", color: "black" }}
        className="total_cart_amount"
      ></div>
      <div className="continue_shopping_btn">
        <Link className="get-started-button" to="/product-list">
          Continue Shopping
        </Link>
        <br />
        <button
          className="get-started-button1"
          onClick={() => handleCheckout()}
          disabled={cart.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
