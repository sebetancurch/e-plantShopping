import { useSelector } from "react-redux";
import "./CartCounter.css";

function CartCounter() {
  const counter = useSelector((state) => state.cart.items).reduce(
    (acc, item) => {
      const selectedCount = item.plants.filter((plant) => plant.selected);
      return acc + selectedCount.length;
    },
    0
  );

  return <div className="cart-counter">{counter}</div>;
}

export default CartCounter;
