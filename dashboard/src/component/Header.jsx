import React from "react";
import Bell from "../assets/Lab_05/Bell 1.png";
import question from "../assets/Lab_05/Question 1.png";
import Avata from "../assets/Lab_05/Avatar 313.png";
import Search from "../assets/Lab_05/Search.png";
export default function Header() {
    return(
        <div className="flex justify-between items-center text-black p-4 border-b-1 border-gray-300 shadow-md">
            <h2 className="text-pink-600 font-bold text-3xl ">Dashboard</h2>
            <div className="flex items-center gap-4">
                <div className=" bg-gray-200 rounded-lg flex items-center shadow-inner p-0.5">
                    <img src={Search} alt=""  className="p-1 pl-3 pr-3"/>
                    <input
                        className="border-0"
                        type="text"
                        placeholder="Search..."
                    />
                </div>
                <div className="flex items-center gap-4">
                    <img src={Bell} alt="" />
                    <img src={question} alt="" />
                    <div className="avatar rounded-full flex items-center p-0.5 w-10 h-10">
                        <img src={Avata} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}