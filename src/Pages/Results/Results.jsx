// Results.js
import React, { useState, useEffect } from "react";
import classes from "./Results.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import productUrl from "../../API/Endpoints";
import ProductCard from "../../components/Product/ProductCard";
import Mob from "../../components/MobPro/Mob";
import Loader from "../../components/Loader/Loader";


const Results = ({}) => {
  let { categoryName } = useParams();
  const [Isloading, setIsloading] = useState(true);

  if (categoryName === "nen's clothing") {
    // Correct the category name
    categoryName = "men's clothing";
  }

  ;
  const [results, setResults] = useState([]);

  useEffect(() => {
    setIsloading(true);

    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsloading(false);
      });
  }, [categoryName]);

  return (
    <section>
      <h1 style={{ padding: "30px" }}>Results</h1>
      <p style={{ padding: "30px" }}>Category/{categoryName}</p>
      <hr />

      <div>
        {Isloading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className={classes.products_container}>
            {results.map((product) => (
              <ProductCard key={product.id} product={product} renderDesc={false} renderAdd={true} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Results;
