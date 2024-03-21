import React, { useState } from "react";
import App from "../App";
import Cards from "./Cards";
import Shop from "./Shop";

function Foreground() {
    const [cart, setcart] = useState([]);
    const handleClick = (item)=>{
        console.log(item);
    }
    

  return (
    <div className="bg-zinc-800 h-full">
      <App size={cart.length}/>
      <Shop handleClick={handleClick}/>
    </div>
  );
}

export default Foreground;
