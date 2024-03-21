import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
function App({size}) {
  return (
    <div className='navbar bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full flex justify-between px-[12vw] py-4 items-center'>
      <span className='text-5xl font-semibold'>
        BookStore
      </span>
      <div className='relative'>
        <button className='flex justify-center items-center border-2 p-2 rounded-full border-sky-500 text-3xl'> <FaShoppingCart/> </button>
        <span className='absolute -top-2 left-10 text-2xl text-rose-600'>{size}</span>
      </div>
    </div>
  )
}

export default App
