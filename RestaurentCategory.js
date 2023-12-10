import React, { useState } from 'react'
import ItemList from './itemList'

const RestaurentCategory = ({data,showItems,setShowIndex})=>{
 console.log("showIndex",setShowIndex)
  // const [showItems,setShowItems] = useState(false)
  const handleClick = () =>{
    setShowIndex();
  }
  // const handleClick = ()=>{
  //   console.log('sss');
  //   setShowItems(!showItems)
  // }
//console.log(data)
  return (
  <div>
    {/*Header */}
    
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4  cursor-pointer">
      {/* <div className='flex justify-between ' onClick={handleClick}> */}
      <div className='flex justify-between ' onClick={handleClick}  >

      <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
      <span>📩</span>
      </div>
      
      
    </div>
    {/* {data.title} */}
    {/*Accordian Body */}
    {showItems && <ItemList items={data.itemCards}> </ItemList>}
  </div>
)
}




export default RestaurentCategory