import React from "react";
import { useEffect, useState } from "react";
import '../css/Layout.css';
import Header from "./Header";
import Menu from "./Menu";
import Dashboard from "../assets/Lab_05/Squares four 1.png";
import Overview from "./Overview";
import Create from "../assets/Lab_05/create.png";
import EditUserModal from "./Toggle.jsx";
import ModalAdd from "./ModalAdd.jsx";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import { Outlet } from "react-router-dom";


 
export default function Layout({ children }) {
    const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/jasgjkasl")
            .then((response) => response.json())
            .then((pre) => setData(pre));
    },[]); 
    // const [customers, setCustomers] = useState([]);


    // const [selectedCustomer, setSelectedCustomer] = useState(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    // const handleEditClick = (customer) => {
    //   setSelectedCustomer(customer);
    //   setIsModalOpen(true);
    // };
    // const [isAddOpen, setIsAddOpen] = useState(false);

    // const handleAddUser = (newUser) => {
    //   setCustomers((prev) => [...prev, newUser]);
    // };

// console.log(customers);
     return(
        <div className="container">
            <div className="header">
                <Header/>
                <div className="font-bold text-xl ml-1.5 text-left flex justify-items-center-safe p-2 gap-2 mt-3">
                    <img src={Dashboard} alt="" className="w-5 h-5 justify-items-center mt-1 " />
                    <h2>
                        Overview
                    </h2>
                </div>
                <div className="grid grid-cols-3 p-5  m-5">
                    <Overview data={data} />
                </div>
            </div>
            <div className="menu">
                <Menu/>
            </div>
            <div className="content">
              <Outlet/>
            </div>

        </div>
     )
}