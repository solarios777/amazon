import React, { useContext, useEffect, useState } from "react";
import classes from "./Order.module.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import { db } from "../../Utility/Firebase";
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  orderBy,
  
} from "firebase/firestore";
const Order = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(
        collection(db, "users", user.uid, "orders"),
        { orderBy: ["created", "desc"] },
        (snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        }
      );

      return unsubscribe;
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <section className={classes.container}>
      <div className={classes.orders_container}>
        <h2>Your Orders</h2>
        {orders?.length === 0 && (
          <div>
            <hr className={classes.order_hr} />
            <p>Looks like you haven't placed an order </p>
          </div>
        )}
        {/* ordered items */}

        <div>
          {orders?.map((eachOrder, i) => {
            return (
              <div key={i}>
                <hr className={classes.order_hr} />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data.basket?.map((order) => (
                  <ProductCard
                    product={order}
                    flex={true}
                    needpra={true}
                    key={order.id}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Order;
