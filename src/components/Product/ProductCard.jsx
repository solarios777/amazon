import React, { useContext, useState } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/Action.type";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { BiTrashAlt } from "react-icons/bi";

const ProductCard = ({
  product,
  flex,
  renderDesc,
  renderAdd,
  needpra,
  forcart,
  item,
}) => {
  const { image, title, id, rating, price, description } = product;
  

  // const [state, dispatch] = useContext(DataContext);
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, product) => {
    return product.price * product.amount + amount;
  }, 0);
  

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, id, rating, price, description ,amount:1},
    });
  };
  const increment = (item) => {
    dispatch({ type: Type.ADD_TO_BASKET, item });
  };

  const decrement = (id) => {
    dispatch({ type: Type.REMOVE_FROM_BASKET, id });
  };

  const delet = (id) => {
    dispatch({ type: Type.DELETE, id });
  };
const cartItem = basket.find((item) => item.id === id);
const amount = cartItem ? cartItem.amount : 0;

  return (
    <>
      <div
        className={`${classes.card_container} ${
          flex ? classes.prduct_flexed : ""
        } ${forcart ? classes.product_forcart : ""}`}
      >
        <Link to={`/products/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div>
          <h3>{title}</h3>
          {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
          {needpra && (
            <div>
              <div className={classes.rating}>
                <Rating value={rating?.rate} precision={0.1}/>
                <small>{rating?.count}</small>
              </div>
              <div>
                <CurrencyFormat amount={price} />
              </div>
            </div>
          )}
          {forcart && (
            <div>
              <div className={classes.stock}>
                <p>in Stock</p>
              </div>
              <div className={classes.gift}>
                <input type="checkbox" />
                <p>This is a gift.</p>
                <a className={classes.link}>learn more</a>
              </div>
              <div className={classes.actions}>
                <div className={classes.btn_container}>
                  <button
                    className={classes.decrement_btn}
                    onClick={() => decrement(item.id)}
                  >
                    {item.amount === 1 ? (
                      <BiTrashAlt size={15} />
                    ) : (
                      <IoIosArrowDown size={15} />
                    )}
                  </button>
                  <span>{amount}</span>
                  <button onClick={() => increment(item)}>
                    <IoIosArrowUp size={15} />
                  </button>
                </div>
                <button
                  className={classes.btn_container_delete}
                  onClick={() => delet(item.id)}
                >
                  Delete
                </button>
                <Link>save for later</Link>
                <Link>compare with similar products</Link>
                <Link>share</Link>
              </div>
            </div>
          )}
          {renderAdd && (
            <button className={classes.button} onClick={addToCart}>
              add to cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
