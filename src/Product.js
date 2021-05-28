import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import Button from "@material-ui/core/Button";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img className="product__image" src={image} alt="" />

      <Button variant="contained" disableElevation onClick={addToBasket}>
        Add to Basket
      </Button>
    </div>
  );
}

export default Product;
