import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import { Button } from "@material-ui/core";
import FlipMove from "react-flip-move";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
      },
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {<Button onClick={removeFromBasket}>Remove from Basket</Button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
