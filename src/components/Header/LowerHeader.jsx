import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from "./header.module.css";
import { SlLocationPin } from "react-icons/sl";

const LowerHeader = () => {
    return (
      <>
        <div className={classes.lower_container}>
          <ul>
            <li className={classes.lower_container_AiOutlineMenu}>
              <AiOutlineMenu />
              <p>All</p>
            </li>
            <li>Today's Deals</li>
            <li>Buy Again</li>
            <li> Customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
          </ul>
        </div>
        <div className={classes.Lowdelivery}>
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Deliver to</p>
            <span>Ethiopia</span>
          </div>
        </div>
      </>
    );
}

export default LowerHeader
