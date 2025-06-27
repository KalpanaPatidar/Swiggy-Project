<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.jsx";
import FoodOption from "./Components/FoodOption.jsx" // make sure path & case match
// In main.jsx or index.jsx (whatever file mounts <App />)
import "./index.css";
import GroceryOption from "./Components/GroceryOption.jsx";
import DineOption from "./Components/DineOption.jsx";

function App() {
  return (
    <div>
      <Header />
      <FoodOption/>
      <GroceryOption/>
      <DineOption/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
=======
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import SecondaryHome from "./Components/SecondaryHome";
import { store } from "./Stored/stores";
import {Provider} from "react-redux"
import Checkout from "./Components/Checkout";
import './index.css';





// Header section: Let's build it

function App(){
    
    return(
       <>
       <Provider store={store}>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route element={<SecondaryHome></SecondaryHome>}>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Route>
        <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
       </Routes>
       </BrowserRouter>
       </Provider>
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);



// Proxy server "https://cors-anywhere.herokuapp.com/"; 


>>>>>>> 03ccca4fa39b380713cc239f206206c46a55ff94
