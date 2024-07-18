import React, { useContext } from "react";
import classes from "./Cart.module.css";
import ProductCard from "../../components/Product/ProductCard";
import { DataContext } from "../../components/DataProvider/DataProvider";
import Loader from "../../components/Loader/Loader";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/Action.type"
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import LayOut from "../../components/LayOut/LayOut";
import Footer from "../../components/Footer/Footer";

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
  const delet = (id) => {
    dispatch({ type: Type.DELETE, id });
  };


  return (
    <>
      <>
        <section className={classes.mobcontainer}>
          {basket?.length !== 0 ? (
            <div className={classes.moblower_subtotal}>
              <p>subtotal :</p>
              <span className={classes.moblower_subtotal_mon}>
                <CurrencyFormat amount={total} />
              </span>
            </div>
          ) : null}

          <Link to="/payments" className={classes.proceed_to_checkout}>
            proceed to checkout({basket?.length} items)
          </Link>
          <div className={classes.gift_checkbox}>
            <input type="checkbox" />
            <small>This order contains a gift</small>
          </div>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps !!! No item in your cart</p>
          ) : (
            <section>
              {basket.map((item, i) => (
                <>
                  <div key={i} className={classes.cart_product}>
                    <ProductCard
                      product={item}
                      item={item}
                      renderDesc={false}
                      flex={true}
                      renderAdd={false}
                      forcart={true}
                      needpra={true}
                    />
                  </div>
                  <div className={classes.mobbtn_container}>
                    <div className={classes.mobbtn_container_mobile}>
                      <button
                        className={classes.decrement_btn}
                        onClick={() => decrement(item.id)}
                      >
                        {item.amount === 1 ? (
                          <FaRegTrashAlt size={15} />
                        ) : (
                          <FaMinus size={15} />
                        )}
                      </button>
                      <span className={classes.quantity}>{item.amount}</span>
                      <button
                        className={classes.increment_btn}
                        onClick={() => increment(item)}
                      >
                        <FaPlus size={15} />
                      </button>
                    </div>
                    <button
                      className={`${classes.btn_container_delete}`}
                      onClick={() => delet(item.id)}
                    >
                      Delete
                    </button>
                    <span className={classes.save_for_later}>
                      <Link>save for later</Link>
                    </span>
                  </div>

                  <hr />
                </>
              ))}
            </section>
          )}
        </section>
        <section className={classes.container}>
          <div className={classes.cart_container}>
            <div className={classes.upper_part}>
              <h1>Shopping Cart</h1>
              {basket?.length !== 0 ? (
                <div>
                  <Link>Deselect all items</Link>
                  <p>Price</p>
                </div>
              ) : null}
            </div>
            <hr />
            {basket?.length == 0 ? (
              <p>Opps !!! No item in your cart</p>
            ) : (
              <section>
                {basket.map((item, i) => (
                  <>
                    <div key={i} className={classes.cart_product}>
                      <input type="checkbox" />

                      <ProductCard
                        product={item}
                        item={item}
                        renderDesc={true}
                        flex={true}
                        renderAdd={false}
                        forcart={true}
                      />
                      <span
                        className={classes.price_span}
                      >{`$${item.price}`}</span>
                      {/* <div className={classes.btn_container}>
                      <button onClick={() => increment(item)}>
                        <IoIosArrowUp size={25} />
                      </button>
                      <span>{item.amount}</span>
                      <button onClick={() => decrement(item.id)}>
                        <IoIosArrowDown size={25} />
                      </button>
                    </div> */}
                    </div>
                    <hr />
                  </>
                ))}
              </section>
            )}
            {basket?.length !== 0 ? (
              <div className={classes.lower_subtotal}>
                <p>subtotal ({basket?.length} items):</p>
                <span className={classes.lower_subtotal_mon}>
                  <CurrencyFormat amount={total} />
                </span>
              </div>
            ) : null}
          </div>

          {basket?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>subtotal({basket?.length}items)</p>
                <CurrencyFormat amount={total} />
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link to="/payments">proceed to checkout</Link>
            </div>
          )}
        </section>
      </>
      {/* <Footer /> */}
    </>
  );
};

export default Cart;
