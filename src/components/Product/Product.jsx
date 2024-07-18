import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";

import Loader from "../Loader/Loader";
import LayOut from "../LayOut/LayOut";
// import Footer from "../Footer/Footer";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [Isloading, setIsloading] = useState(true);


  useEffect(() => {
    setIsloading(true);

    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setIsloading(false);
        setProducts(res.data);
      })
      .catch((err) => {
        setIsloading(false);
        console.log(err);
      });
  }, []);

  

  return (
    <>
      <>
        {Isloading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <section className={classes.products_container}>
            {products?.map((singleProduct) => {
              return (
                <ProductCard
                  product={singleProduct}
                  key={singleProduct.id}
                  renderAdd={true}
                  needpra={true}
                  forcart={false}
                  
                />
              );
            })}
          </section>
        )}
      </>
      
    </>
  );
};

export default Product;
