import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { PARCEL_NUMBER_ARRAY } from "./../../../../../Data/Constant";

export default function ParcelOrder() {
  let history = useHistory();

  let bgOrange = "bg-orange-600";
  let bgGreen = "bg-green-600";

  const [getBooked, setBooked] = useState(false);
  
  function handleColor(item){
    setBooked(item.booked);

    if(getBooked===true){
      return "bg-orange-600"
    }
  }

  function dataShow(item) {
    console.log(item.name);
    
    if(getBooked === true){
      // setBooked(true);
    }    
    
    history.push("#");
  }
  
  return (
    <div className=" grid gap-x-1 gap-y-1 grid-cols-5 mt-28  h-60 ">
      {PARCEL_NUMBER_ARRAY.map((item) => {
        return (
          <button
            type="button"
            className={` ${handleColor} text-white from-neutral-300 font-bold text-xl leading-tight uppercase rounded-2xl shadow-md  hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`} key={item.name}
            onClick={() => dataShow(item)}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
