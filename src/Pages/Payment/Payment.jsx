import React, { useContext, useState } from "react";
import "./Payment.css";
import { DataContext } from "../../components/DataProvider/DataProvider";
import ProductCard from "../../components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Link, useNavigate } from "react-router-dom";
import CurrencyFormat from "../../components/CurrencyFormat/CurrencyFormat";
import { axiosInstance } from "../../API/Axios";
import { ClipLoader } from "react-spinners";
import { db } from "../../Utility/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { Type } from "../../Utility/Action.type";

const AmazonPaymentPage = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const [cardErr, setcardErr] = useState("");
  const [processing, setprocessing] = useState(false);
  const navigate = useNavigate();

  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    e?.error?.message ? setcardErr(e.error.message) : setcardErr("");
  };
  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      setprocessing(true);
      // backend | function => contact to the client Secret
      const response = await axiosInstance({
        method: "POST",
        url: `/payment/create?total=${total * 100}`,
      });
      // console.log(response.data);
      const clientSecret = response.data?.clientSecret;

      // client side confirmation
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });
      // console.log(confirmation);

      // order firestore database save ,clear store
      await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });
      dispatch({ type: Type.EMPTY_BASKET });

      setprocessing(false);
      navigate("/orders", { state: { msg: "you have placed new order" } });
    } catch (error) {
      console.log(error);
      setprocessing(false);
    }
  };

  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState({
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
  });

  const [activeSection, setActiveSection] = useState("shipping");

  const handleShippingAddressChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod({
      ...paymentMethod,
      [e.target.name]: e.target.value,
    });
  };

  const handleSectionToggle = (section) => {
    setActiveSection(section);
  };

  const isShippingAddressValid = () => {
    return (
      shippingAddress.name !== "" &&
      shippingAddress.address1 !== "" &&
      shippingAddress.city !== "" &&
      shippingAddress.state !== "" &&
      shippingAddress.zipCode !== "" &&
      shippingAddress.country !== "" &&
      shippingAddress.phone !== ""
    );
  };

  

  const handleContinueClick = () => {
    if (isShippingAddressValid()) {
      handleSectionToggle("order-summary");
    }
  };


  return (
    <div className="amazon-payment-page-container">
      <div className="amazon-payment-page-header">
        <div className="amazon-logo">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png"
              alt="Amazon Logo"
            />
          </Link>
        </div>
        <h1 className="amazon-payment-page-title">
          Checkout ({totalItem} items)
        </h1>
      </div>
      <hr />
      <div className="amazon-payment-page-content">
        <div
          className={`amazon-payment-section ${
            activeSection === "shipping" ? "visible" : "hidden"
          }`}
        >
          <div className="section-header">
            <div className="section-header-title">
              <h2
                className={`${activeSection === "shipping" ? "text-red" : ""}`}
                onClick={() => handleSectionToggle("shipping")}
              >
                1 Shipping Address
              </h2>
              <small onClick={() => handleSectionToggle("shipping")}>
                change
              </small>
            </div>
            {activeSection === "shipping" && (
              <div className="section-content">
                {/* Shipping address form fields */}
                <div className="amazon-checkout-form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={shippingAddress.name}
                    onChange={handleShippingAddressChange}
                  />
                </div>
                {/* Shipping address form fields */}
                <div className="amazon-checkout-form-group">
                  <label htmlFor="address1">Address 1</label>
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    value={shippingAddress.address1}
                    onChange={handleShippingAddressChange}
                  />
                </div>
                <div className="amazon-checkout-form-group">
                  <label htmlFor="address2">Address 2</label>
                  <input
                    type="text"
                    id="address2"
                    name="address2"
                    value={shippingAddress.address2}
                    onChange={handleShippingAddressChange}
                  />
                </div>

                <div className="amazon-checkout-form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={shippingAddress.country}
                    onChange={handleShippingAddressChange}
                  />
                </div>
                <div className="amazon-checkout-form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={shippingAddress.phone}
                    onChange={handleShippingAddressChange}
                  />
                </div>
                <div className="amazon-checkout-form-group-three">
                  <div className="amazon-checkout-form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={shippingAddress.city}
                      onChange={handleShippingAddressChange}
                    />
                  </div>
                  <div className="amazon-checkout-form-group">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={shippingAddress.state}
                      onChange={handleShippingAddressChange}
                    />
                  </div>
                  <div className="amazon-checkout-form-group">
                    <label htmlFor="zipCode">Zip Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={shippingAddress.zipCode}
                      onChange={handleShippingAddressChange}
                    />
                  </div>
                </div>
                <button
                  onClick={handleContinueClick}
                  className="amazon-checkout-button"
                >
                  Save and Continue
                </button>
              </div>
            )}
            {isShippingAddressValid() && (
              <div className="section-content-add">
                <p>
                  {shippingAddress.name}
                  <br />
                  {shippingAddress.country}
                  <br />
                  {shippingAddress.address2}
                  <br />
                  {shippingAddress.city},{shippingAddress.zipCode}
                </p>
              </div>
            )}
          </div>
        </div>
        <hr />
        <div
          className={`amazon-payment-section ${
            activeSection === "order-summary" ? "visible" : "hidden"
          }`}
        >
          {/* Order summary content */}
          <div className="section-header">
            <h2
              className={`${
                activeSection === "order-summary" ? "text-red" : ""
              }`}
            >
              3 Order Summary
            </h2>
            {activeSection === "order-summary" && (
              <>
                <div className="amazon-checkout-order-item">
                  {/* Order summary content */}
                  {basket?.map((item) => (
                    <ProductCard product={item} flex={true} needpra={true} />
                  ))}
                </div>
                <button
                  onClick={() => handleSectionToggle("payment")}
                  className="amazon-checkout-button"
                >
                  Continue to pay
                </button>
                <hr />
              </>
            )}
          </div>
        </div>
        <div
          className={`amazon-payment-section ${
            activeSection === "payment" ? "visible" : "hidden"
          }`}
        >
          <div className="section-header">
            <div className="section-header-title">
              <h2
                className={`${activeSection === "payment" ? "text-red" : ""}`}
                onClick={() => handleSectionToggle("payment")}
              >
                2 Payment Method
              </h2>
              <small onClick={() => handleSectionToggle("payment")}>
                change
              </small>
            </div>
            {activeSection === "payment" && (
              <div className="section-content">
                <form className="form" action="" onSubmit={handlePayment}>
                  {cardErr && <small className="text-red">{cardErr}</small>}
                  <CardElement onChange={handleChange} />
                  <div className="payment-price">
                    <div>
                      <span>
                        Total order | <CurrencyFormat amount={total} />
                      </span>
                    </div>
                    <button type="submit" className="amazon-checkout-button">
                      {processing ? (
                        <div className="processing">
                          <ClipLoader color="grey" size={13} />
                          <p>please wait...</p>
                        </div>
                      ) : (
                        "Buy now"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        <hr />

        <main className="main-content">
          <section className="help-information">
            <p>
              Need help? Check our <a href="#">Help pages</a> or
              <a href="#">contact us</a>
            </p>
          </section>
          <section className="order-confirmation">
            <p>
              For an item sold by Amazon.com: When you click the "Place your
              order" button, we'll send you an email message acknowledging
              receipt of your order. Your contract to purchase an item will not
              be complete until we send you an email notifying you that the item
              has been shipped.
            </p>
          </section>
          <section className="sales-tax-information">
            <a href="#">
              Important information about sales tax you may owe in your state
            </a>
            <p>
              You may return new, unopened merchandise in original condition
              within 30 days of delivery. Exceptions and restrictions apply. See
              Amazon.com's Returns Policy.
            </p>
          </section>
          <section className="call-to-action">
            <p>
              Need to add more items to your order? Continue shopping on the
              <a href="/"> Amazon.com homepage</a>.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AmazonPaymentPage;
