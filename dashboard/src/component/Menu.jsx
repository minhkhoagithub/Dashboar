import React from "react";
import { NavLink } from "react-router-dom";
import '../css/Layout.css';
import Dashboard from "../assets/Lab_05/Squares four 1.png";
import Project from "../assets/Lab_05/Folder.png";
import Teams from "../assets/Lab_05/Groups.png";
import Analist from "../assets/Lab_05/Pie chart.png";
import Message from "../assets/Lab_05/Chat.png";
import Intergration from "../assets/Lab_05/Code.png";
import Logo from "../assets/Lab_05/Image 1858.png";
import Group from "../assets/Lab_05/Group.png";
 export default function Menu() {
    const navItems = [
        { label: "Dashboard", to: "/dashboard", icon: Dashboard },
        { label: "Project", to: "/project", icon: Project },
        { label: "Teams", to: "/teams", icon: Teams },
        { label: "Analist", to: "/analist", icon: Analist },
        { label: "Messages", to: "/messages", icon: Message },
        { label: "Intergrations", to: "/intergrations", icon: Intergration },
    ];
    return (
        <div className="flex flex-col gap-4  min-h-full lg:min-h-screen  p-2  border-r-1 border-gray-300 shadow-md">
            <div className="flex items-center gap-2  mt-5 pl-5 h-10">
                <img src={Logo} alt="" />
            </div>
                <ul className="flex-grow mb-auto">

                    {navItems.map((item) => (
                    <li key={item.to} className="mb-3">
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                                    isActive
                                        ? "bg-pink-500 text-white"
                                        : "text-gray-700 hover:bg-pink-500 hover:text-white"
                                }`
                            }
                        >
                            <img src={item.icon} alt={item.label} className="w-5 h-5" />
                            <span>{item.label}</span>
                        </NavLink>
                    </li>
                ))}
                
                </ul>
                <div className=" mt-auto relative  p-5 bg-blue-100 rounded-md flex flex-col items-center mb-5" >
                    <img src={Group} alt="" className="min-h-max w-max  " />
                    <p className="text-xl font-bold text-center mb-5 mt-5">V2.0 is available</p>
                    <button className="border-blue-400 border-1 pl-7 pr-7 w-50 rounded-sm text-blue-600 p-1 bg-white left-1/2 "> Try now</button>
                </div>
            

            
        </div>
    )
 }
