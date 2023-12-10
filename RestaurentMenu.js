import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurentCategory from "./RestaurentCategory";




const RestaurentMenu =  () =>{
   // const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();
   // console.log(params)

   const resInfo = useRestaurantMenu(resId);

   const [showIndex,setShowIndex] = useState(null);


    // useEffect(()=>{
    //    fetchMenu();
    // },[])

    // const fetchMenu = async ()=>{
    //     const data = await fetch(MENU_API +resId)

    //     const json =  await data.json();
    //     console.log("json>>>",json);
    //     setResInfo(json.data)
    // };
    

    if (resInfo === null ) return <Shimmer></Shimmer>;

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    //const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    //console.log(itemCards)

  //  console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2])

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log("categories",categories);

    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(',')} - {costForTwoMessage}
            </p>
        {/* categories accordians*/}

        {

            categories.map((category,index)=>
            //controlled component
             <RestaurentCategory 
            
            key={category?.card?.card.title}
             data={category?.card?.card}
             showItems={index === showIndex ? true : false}
             setShowIndex ={()=>setShowIndex(index)}
             ></RestaurentCategory>)
        }

            <h3></h3>
            <h2></h2>
            {/* <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
            <h2>{resInfo?.cards[0]?.card?.card?.info.cuisines}</h2>
            <h3>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage }</h3> */}
            {/* <h2>Menu</h2> */}
            {/* <ul>
               {
                itemCards.map((item)=>(
                <li key= {item.card.info.id}>{item.card.info.name} -Rs: {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))
               } */}
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>Diet Cokes</li> */}
               
                
            {/* </ul> */}

        </div>
    )
}

export default RestaurentMenu;