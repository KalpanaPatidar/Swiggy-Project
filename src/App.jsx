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
