import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";
import productUrl from "../../API/Endpoints";
import Loader from "../../components/Loader/Loader";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [Isloading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }, []);

  

  return (
    <div>
      {Isloading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
          needpra={true}
          forcart={false}
        />
      )}
    </div>
  );
};

export default ProductDetail;
