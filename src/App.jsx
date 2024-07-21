import React, { useContext, useEffect } from "react";
import "./App.css";
import Routing from "./Router";
import { DataContext } from "./components/DataProvider/DataProvider";
import {auth} from "./Utility/Firebase.js"
import { Type } from "./Utility/Action.type";
const App = () => {
  const [{user},dispatch]=useContext(DataContext)

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch(
          {
            type: Type.SET_USER,
            user: authuser 
          }
          
        )
      } else {
         dispatch(
          {
            type: Type.SET_USER,
            user:null
          })
      }
    })
  
  }, [])
  
  return (
    <>
      <Routing/>
      
    </>
  );
};


export default App;
