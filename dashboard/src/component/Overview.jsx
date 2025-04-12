import React, { memo, useEffect, useState } from "react";
import Cart from "../assets/Lab_05/Button 1509.png";
import USD from "../assets/Lab_05/Button 1529.png";
import User from "../assets/Lab_05/Button 1530.png";

 function Overview( {data}) {
    const colorMap = {
        pink: "bg-pink-100",
        green: "bg-green-100",
        blue: "bg-blue-100",
      };
      const imageMap = {
        cart: Cart,
        usd: USD,
        user: User,
    };
     return(
        <>{
            data.map((item) =>{
                return(
                    <div className={`grid grid-cols-2 w-full max-w-[80%] h-auto ${colorMap[item.color]} rounded-md p-4 mx-auto`} key={item.id}>
                        <div className="text-left">
                            <div className="font-semibold text-lg ">{item.Title}</div>
                            <div className="font-extrabold text-3xl pt-3 pb-3">{item.Price}</div>
                            <div className="flex text-xs"><p className="text-green-700">+{item.Percent}%  </p> <p className="italic"> period of change</p></div>
                        </div>
                        <div className="relative ">
                            <img src= {imageMap[item.symple]} alt="" className="w-7 absolute right-0" />
                        </div>
                    </div>
                )
            })
        }
        </>

      
     )
}
export default memo(Overview);
