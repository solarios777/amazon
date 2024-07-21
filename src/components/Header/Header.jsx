import React, { useContext } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import  classes from "./header.module.css"
import LowerHeader from "./LowerHeader";
import Carouselc from "../Carouselc/Carouselc";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/Firebase";

const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext)
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount
  },0)
  return (
    <>
      <section className={classes.fixed}>
        <section className={classes.section}>
          <header className={classes.header_container}>
            <div className={classes.logo_container}>
              <Link to="/">
                <img src="/images/amazon_PNG11.png" alt="" />
              </Link>
              <div className={classes.delivery}>
                <span>
                  <SlLocationPin />
                </span>
                <div>
                  <p>Deliver to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
            <div className={classes.search}>
              <select name="" id="">
                <option value="">All</option>
              </select>
              <input type="text" placeholder="search product" />
              <BsSearch />
            </div>
            <div className={classes.order_container}>
              <div className={classes.language}>
                <Link to="">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041"
                    alt=""
                  />
                  <select name="" id="">
                    <option value="">EN</option>
                  </select>
                </Link>
              </div>

              <Link to={!user && "/auth"}>
                <div className={classes.Signin}>
                  <div>
                    {user ? (
                      <>
                        <p>Hello {user?.email?.split("@")[0]}</p>
                        <span onClick={()=>auth.signOut()}>Sign out</span>
                      </>
                    ) : (
                      <>
                        <p>Hello, Sing In</p>
                        <span>Account & List</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
              <Link to="/order" className={classes.return}>
                <p>returns</p>
                <span>& Orders</span>
              </Link>

              <Link to="/cart" className={classes.cart}>
                <div>
                  <BiCart size={35} />
                  <span>{totalItem}</span>
                </div>
                <div>
                  <p>cart</p>
                </div>
              </Link>
            </div>
          </header>
          <LowerHeader />
        </section>
      </section>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
