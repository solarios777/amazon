import React, { Component } from "react";
import styles from "./Footer.module.css";

class Footer extends Component {
  state = {
    windowWidth: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    const { windowWidth } = this.state;

    return (
      <div>
        {windowWidth >= 768 ? (
          <>
            <footer className={styles.footer}>
              <div className={styles.footerTop}>
                <a href="#" className={styles.backToTop}>
                  Back to top
                </a>
              </div>
              <div className={styles.footerMiddle}>
                {/* Footer content for larger screens */}
                {/* ... */}
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
                  <h4 className={styles.footerHeading}>
                    Amazon Payment Products
                  </h4>
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
              <hr className={styles.horizontalRule} />
              <div className={styles.languageCurrency}>
                <div className={styles.footerBottom_logo}>
                  <img src="/images/amazon_PNG11.png" alt="" />
                </div>
                <div className={styles.languageCurrency_country}>
                  <div className={styles.language}>
                    <i className={`${styles.globeIcon} fas fa-globe`}></i>
                    <span>English</span>
                  </div>
                  <div className={styles.currency}>
                    <span>$ USD-U.S.Dollar</span>
                  </div>

                  <div className={styles.country}>
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041"
                      alt="United States"
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
            </footer>
            <div className={styles.container}>
              <div className={styles.upper_container}>
                <div className={styles.service}>
                  <h3>Amazon Music</h3>
                  <p>Stream millions of songs</p>
                </div>
                <div className={styles.service}>
                  <h3>Amazon Ads</h3>
                  <p>Reach customers wherever they spend their time</p>
                </div>
                <div className={styles.service}>
                  <h3>6pm</h3>
                  <p>Score deals on fashion brands</p>
                </div>
                <div className={styles.service}>
                  <h3>AbeBooks</h3>
                  <p>Books, art & collectibles</p>
                </div>
                <div className={styles.service}>
                  <h3>ACX</h3>
                  <p>Audiobook Publishing Made Easy</p>
                </div>
                <div className={styles.service}>
                  <h3>Sell on Amazon</h3>
                  <p>Start a Selling Account For Your Business</p>
                </div>
                <div className={styles.service}>
                  <h3>Amazon Business Everything</h3>
                  <p>For Your Business</p>
                </div>
                <div className={styles.service}>
                  <h3>AmazonGlobal</h3>
                  <p>Ship Orders Internationally Guarantee</p>
                </div>
                <div className={styles.service}>
                  <h3>Home Services</h3>
                  <p>Experienced Pros Happiness</p>
                </div>
                <div className={styles.service}>
                  <h3>Amazon Web Services</h3>
                  <p>Scalable Cloud Computing Services</p>
                </div>
                <div className={styles.service}>
                  <h3>Audible</h3>
                  <p>Listen to Books & Original Audio Performances</p>
                </div>
                <div className={styles.service}>
                  <h3>Box Office Mojo</h3>
                  <p>Find Movie Box Office Data</p>
                </div>
                <div className={styles.service}>
                  <h3>Goodreads</h3>
                  <p>Book reviews & recommendations</p>
                </div>
                <div className={styles.service}>
                  <h3>IMDb</h3>
                  <p>Movies, TV & Celebrities</p>
                </div>
                <div className={styles.service}>
                  <h3>IMDbPro</h3>
                  <p>Get Info Entertainment Professionals Need</p>
                </div>
                <div className={styles.service}>
                  <h3>Kindle Direct Publishing</h3>
                  <p>Indie Digital & Print Publishing Made Easy</p>
                </div>
                <div className={styles.service}>
                  <h3>Prime Video</h3>
                  <p>Direct Video Distribution Made Easy</p>
                </div>
                <div className={styles.service}>
                  <h3>Shopbop</h3>
                  <p>Designer Fashion Brands</p>
                </div>
                <div className={styles.service}>
                  <h3>Woot!</h3>
                  <p>Deals and Shenanigans</p>
                </div>
                <div className={styles.service}>
                  <h3>Zappos</h3>
                  <p>Shoes & Clothing</p>
                </div>
                <div className={styles.service}>
                  <h3>Ring</h3>
                  <p>Smart Home Security Systems</p>
                </div>
                <div className={styles.service}>
                  <h3> </h3>
                  <p> </p>
                </div>
                <div className={styles.service}>
                  <h3>eero WiFi</h3>
                  <p>Stream 4K Video in Every Room</p>
                </div>
                <div className={styles.service}>
                  <h3>Blink</h3>
                  <p>Smart Security for Every Home</p>
                </div>
                <div className={styles.service}>
                  <h3>Neighbors App</h3>
                  <p>Real-Time Crime & Safety Alerts</p>
                </div>
                <div className={styles.service}>
                  <h3>Amazon Subscription Boxes</h3>
                  <p>Top subscription boxes – right to your door</p>
                </div>
                <div className={styles.service}>
                  <h3>PillPack</h3>
                  <p>Pharmacy Simplified</p>
                </div>
              </div>
              <div className={styles.footerBottom}>
                <div className={styles.footerBottom_Privacy}>
                  <p>conditions of use & privacy notice</p>
                  <p>Consumers Health Data Privacy Disclosure</p>
                  <p>Your Ads Privacy Choices</p>
                </div>
                <p className={styles.copyrightText}>
                  &copy; 1996-2024, Amazon.com, Inc. or its affiliates
                </p>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className={styles.topOfPage}>
              {/* Footer content for smaller screens */}
              {/* ... */}
              <div className={styles.mobcontainer}>
                <div className={styles.leftColumn}>
                  <a href="#">Amazon.com</a>
                  <a href="#">Your Lists</a>
                  <a href="#">Find a Gift</a>
                  <a href="#">Browsing History</a>
                  <a href="#">Returns</a>
                </div>
                <div className={styles.rightColumn}>
                  <a href="#">Your Orders</a>
                  <a href="#">Gift Cards</a>
                  <a href="#">Your Account</a>
                  <a href="#">Sell products on Amazon</a>
                  <a href="#">Recalls and Product Safety Alerts</a>
                  <a href="#">Customer Service</a>
                </div>
              </div>
            </div>
            <div className={styles.languageCurrency_lower}>
              {/* Language and currency selection */}
              {/* ... */}
              <div className={styles.languageCurrency}>
                <div className={styles.language}>
                  <i className={`${styles.globeIcon} fas fa-globe`}></i>
                  <span>English</span>
                </div>
                <div className={styles.currency}>
                  <span>$ USD-U.S.Dollar</span>
                </div>
              </div>
              <div className={styles.country}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041"
                  alt="United States"
                />
                <span>United States</span>
              </div>
              <div className={styles.footerBottom}>
                <div className={styles.footerBottom_Privacy}>
                  <p>conditions of use & privacy notice</p>
                  <p>Consumers Health Data Privacy Disclosure</p>
                  <p>Your Ads Privacy Choices</p>
                </div>
                <p className={styles.copyrightText}>
                  &copy; 1996-2024, Amazon.com, Inc. or its affiliates
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Footer;
