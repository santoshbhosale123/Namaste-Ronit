import { CDN_URL } from "../utils/constants"

const ItemList = ({items})=>{
 //console.log("itemsssss",items)
 
    return (
        <div>
             {/* CategoryItemList */}
             
                {items.map(item=><div key={item.card.info.id} className=" w-6/12 mx-auto my-4 p-2 m-2 border-gray-200  border-b-2 text-left flex justify-between">
                    
                <div className="w-10/12">
                <div className="py-2">
                    <span>{item.card.info.name}</span>
                   <span>- ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
                   </div>
                   <p className="text-xs">{item.card.info.description}</p>
                </div>
                 
                   <div className="w-4/12 float-right p-4">
                    <div className="absolute ">
                    <button className="p-2 bg-black text-white m-22 rounded-lg shadow-lg   ">Add +</button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId}></img>
                   </div>
                 </div>

                
         )}
             
        </div>
    )
}


export default ItemList