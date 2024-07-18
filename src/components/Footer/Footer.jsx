import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <a href="#" className={styles.backToTop}>
          Back to top
        </a>
      </div>
      <div className={styles.footerMiddle}>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Get to Know Us</h4>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About Amazon</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Amazon Devices</a>
            </li>
            <li>
              <a href="#">Amazon Science</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Make Money with Us</h4>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Sell products on Amazon</a>
            </li>
            <li>
              <a href="#">Sell on Amazon Business</a>
            </li>
            <li>
              <a href="#">Sell apps on Amazon</a>
            </li>
            <li>
              <a href="#">Become an Affiliate</a>
            </li>
            <li>
              <a href="#">Advertise Your Products</a>
            </li>
            <li>
              <a href="#">Self-Publish with Us</a>
            </li>
            <li>
              <a href="#">Host an Amazon Hub</a>
            </li>
            <li>
              <a href="#">See More Make Money With us</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Amazon Payment Products</h4>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Amazon Business Card</a>
            </li>
            <li>
              <a href="#">Shop with Points</a>
            </li>
            <li>
              <a href="#">Reload Your Balance</a>
            </li>
            <li>
              <a href="#">Amazon Currency Converter</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <h4 className={styles.footerHeading}>Let Us Help You</h4>
          <ul className={styles.footerList}>
            <li>
              <a href="#">Amazon and COVID-19</a>
            </li>
            <li>
              <a href="#">Your Account</a>
            </li>
            <li>
              <a href="#">Your Orders</a>
            </li>
            <li>
              <a href="#">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="#">Returns & Replacements</a>
            </li>
            <li>
              <a href="#">Manage Your content and Devices</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyrightText}>
          &copy; 1996-2024, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
