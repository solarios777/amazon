import React from 'react'
import Header from "../Header/Header"
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const LayOut = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer/>{/* Render the Footer component */}
    </>
  );
}

export default LayOut
