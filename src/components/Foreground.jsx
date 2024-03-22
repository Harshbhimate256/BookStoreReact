import React, { useEffect, useState } from "react";
import App from "../App";
import Cards from "./Cards";
import Shop from "./Shop";
import Cart from "./Cart";

function Foreground() {

    const [show, setshow] = useState(true);

    const [cart, setcart] = useState([]);
    const [warning, setWarning] = useState(false);
    const handleClick = (item)=>{
        let isPresent  = false;
        cart.forEach((product)=>{
          if(item.id === product.id)
          isPresent = true;
        })

        if(isPresent){
          setWarning(true);
          setTimeout(()=>{
            setWarning(false);
          },2000);
          return;
        }

        setcart([...cart,item]);
    }
    const handleChange = (item, d)=>{
      let ind = -1;
      cart.forEach((data,index)=>{
        if(data.id === item.id)
        ind = index;
      });
      const tempArr = cart;      
      tempArr[ind].amount = tempArr[ind].amount + d;
      // console.log(tempArr);
      if(tempArr[ind].amount === 0){
        tempArr[ind].amount = 1;
        setcart([...tempArr])
      }
    }

  return (
    <div className="bg-zinc-800 h-full">
      <App size={cart.length} setshow = {setshow}/>
      {
        show ? <Shop handleClick={handleClick}/> :<Cart cart = {cart} setcart={setcart} handleChange={handleChange}/>
      }
      
    </div>
  );
}

export default Foreground;
