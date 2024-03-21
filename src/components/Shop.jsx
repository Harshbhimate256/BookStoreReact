import React from 'react'
import Cards from './Cards'
import list from '../list'
function Shop({handleClick}) {
    
  return (
    <div className="w-[80%] flex flex-wrap justify-center items-center ml-[10%] gap-5">
        {
            list.map((item)=>{
                 return <Cards data={item} key={item.id} handleClick={handleClick}/>
            })
        }
      </div>
  )
}

export default Shop
