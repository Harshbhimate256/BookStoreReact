import React, { useEffect, useState } from "react";

function Cart({ cart, setcart ,handleChange}) {
  const [price, setprice] = useState(0);
  const handleRemove = (id)=>{
    const arr = cart.filter((item)=> item.id !== id);
    setcart(arr);
  }

  const handlePrice = ()=>{
    let ans = 0;
    cart.map((item)=>{
        ans+= item.amount * item.price;
        console.log(item.amount);
    })
    setprice(ans);
  }
  useEffect(()=>{
    handlePrice();
  }); 
  


  return (
    <div className="h-screen bg-zinc-700 w-full">
      {cart?.map((item) => (
        <div className="flex justify-center">
          <div className="border-b border-white flex gap-10">
            <div className="img-container bg-red-500 w-[8vw] my-2">
              <img src={item.img} />
            </div>
            <div className="title text-3xl uppercase font-serif text-sky-500">
              <h1>{item.name}</h1>
            </div>
            <div className="h-[10vh] w-[5vw] flex flex-wrap justify-center mt-10">
              <button onClick={()=> handleChange(item, +1)} className="h-10 w-10 bg-red-100 border-[1px] text-2xl border-black">
                +
              </button>
              <button onClick={()=> handleChange(item, -1)} className="h-10 w-10 bg-red-100 border-[1px] text-2xl border-black">
                -
              </button>
              <div className="h-10 w-10 border-[1px] bg-red-100 text-2xl border-black text-center">
                <p>{item.amount}</p>
              </div>
            </div>
            <div>
              <div className="h-10 w-12 bg-red-200 border-[1px] text-2xl border-black mt-10 text-center">
                <h1>{item.price}</h1>
              </div>
              <button className="bg-orange-400 text-xl font-bold mt-2" onClick={()=> handleRemove(item.id)}>
                remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center text-5xl font-bold text-sky-800">
        <span>Total price of your cart</span>
        <span>Rs:{price}</span>
      </div>
    </div>
  );
}

export default Cart;
