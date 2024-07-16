import React, { useContext } from "react";
import classes from "./Cart.module.css";
import ProductCard from "../../components/Product/ProductCard";
import { DataContext } from "../../components/DataProvider/DataProvider";
import Loader from "../../components/Loader/Loader";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/Action.type"
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  const total = basket.reduce((amount, item) => {
   return (item.price *item.amount)+amount
  }, 0)
  
  const increment = (item) => {
    dispatch(
      {type:Type.ADD_TO_BASKET,
      item}
     )
  }
  

  const decrement= (id) => {
    dispatch(
     { type:Type.REMOVE_FROM_BASKET,
      id}
     )
  }
  


  return (
    <section className={classes.container}>
      <div className={classes.cart_container}>
        <h2>Hello</h2>
        <h3>Your shopping basket</h3>
        <hr />
        {basket?.length == 0 ? (
          <p>Opps !!! No item in your cart</p>
        ) : (
          basket?.map((item, i) => {
            if (!item) {
              return <Loader />;
            }
            return (
              <section className={classes.cart_product}>
                <ProductCard
                  key={i}
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAdd={false}
                />
                <div className={classes.btn_container}>
                  <button onClick={() => increment(item)}>
                    <IoIosArrowUp size={25} />
                  </button>
                  <span>{item.amount}</span>
                  <button onClick={() => decrement(item.id)}>
                    <IoIosArrowDown size={25} />
                  </button>
                </div>
              </section>
            );
          })
        )}
      </div>

      {basket?.length !== 0 && (
        <div className={classes.subtotal}>
          <div>
            <p>subtotal({basket?.length}items)</p>
            <CurrencyFormat amount={total }/>
          </div>
          <span>
            <input type="checkbox" />
            <small>This order contains a gift</small>
          </span>
          <Link to="/payments">Continue to checkout</Link>
        </div>
      )}
    </section>
  );
};

export default Cart;
