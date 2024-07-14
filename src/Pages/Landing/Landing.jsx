import React from 'react'
import "./Landing.css"
import Carouselc from '../../components/Carouselc/Carouselc';
import Category from '../../components/Category/Category';
import Product from '../../components/Product/Product';
import Mob from '../../components/MobPro/Mob';

const Landing = () => {
  return (
    <div>
      <Carouselc/>
      <Category/>
      <div className="product-container">
        <Product/>
      </div>
      <div className="mob-container">
        <Mob/>
      </div>
    </div>
  );
}

export default Landing
