import React, { useState, useEffect } from "react";
import "./Mob.css"

const Mob = () => {
  const [products, setProducts] = useState([]);
  const [menClothing, setMenClothing] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [womenClothing, setWomenClothing] = useState([]);
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);

        // Categorize the products
        const menClothingData = [];
        const electronicsData = [];
        const womenClothingData = [];
        const jeweleryData = [];

        data.forEach((product) => {
          switch (product.category) {
            case "men's clothing":
              menClothingData.push(product);
              break;
            case "electronics":
              electronicsData.push(product);
              break;
            case "women's clothing":
              womenClothingData.push(product);
              break;
            case "jewelery":
              jeweleryData.push(product);
              break;
            default:
              break;
          }
        });

        setMenClothing(menClothingData);
        setElectronics(electronicsData);
        setWomenClothing(womenClothingData);
        setJewelery(jeweleryData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="category">
        <h2>Men's Clothing</h2>
        <div className="product-grid">
          {menClothing.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
          ))}
        </div>
        <h3>See more</h3>
      </div>

      <div className="category">
        <h2>Electronics</h2>
        <div className="product-grid">
          {electronics.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
          ))}
        </div>
        <h3>See more</h3>
      </div>

      <div className="category">
        <h2>Women's Clothing</h2>
        <div className="product-grid">
          {womenClothing.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
          ))}
        </div>
        <h3>See more</h3>
      </div>

      <div className="category">
        <h2>Jewelry</h2>
        <div className="product-grid">
          {jewelery.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
          ))}
        </div>
        <h3>See more</h3>
      </div>
    </div>
  );
};

export default Mob;
