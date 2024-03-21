import React from "react";

function Cards({data,handleClick}) {
  return (
    <div className="h-[57vh] w-[15vw] bg-blue-600 rounded-xl flex flex-col justify-between overflow-hidden">
      <div className="w-full overflow-hidden">
        <img className="" src={data.img} />
      </div>
      <div className="ml-2">
        <div>
          <h1 className="text-3xl font-semibold">{data.name}</h1>
        </div>
        <div>
          <h1 className="text-2xl font-serif">{data.price}Rs</h1>
        </div>
        <button onClick={()=> handleClick(data)} className="border-2 mb-2 border-black font-bold text-xl hover:bg-black hover:text-white">Add to cart</button>
      </div>
      
    </div>
  );
}

export default Cards;
