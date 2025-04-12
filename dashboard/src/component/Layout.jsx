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

const statusBodyTemplate = (rowData) => {
    const statusStyles = {
      new: "bg-blue-100 text-blue-700",
      "in-progress": "bg-yellow-100 text-yellow-700",
      completed: "bg-green-100 text-green-700",
    };
  
    return (
      <span className={`px-3 py-1 text-xs rounded-full font-semibold ${statusStyles[rowData.status]}`}>
        {rowData.status.charAt(0).toUpperCase() + rowData.status.slice(1)}
      </span>
    );
  };
  const customerBodyTemplate = (rowData) => (
    <div className="flex items-center gap-3">
      <img src={`/Lab_05/${rowData.avatar}`} alt={rowData.Name} className="w-8 h-8 rounded-full" />
      <span className="font-semibold">{rowData.Name}</span>
    </div>
  );

  const orderValueTemplate = (rowData) => `${rowData.Ordervalue}`;
  const orderDateTemplate = (rowData) => rowData.date;
  const companyTemplate = (rowData) => rowData.Company;
 
export default function Layout({ children }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/jasgjkasl")
            .then((response) => response.json())
            .then((pre) => setData(pre));
    },[]); 
    useEffect(() => {
        fetch("https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/id")
            .then((response) => response.json())
            .then((pre) => setCustomers(pre)) 
            .catch((error) => console.error("Error fetching data:", error))
            .finally(() => setLoading(false));
    }, []);
    const [customers, setCustomers] = useState([]);


    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEditClick = (customer) => {
      setSelectedCustomer(customer);
      setIsModalOpen(true);
    };
    const [isAddOpen, setIsAddOpen] = useState(false);

    const handleAddUser = (newUser) => {
      setCustomers((prev) => [...prev, newUser]);
    };

console.log(customers);
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
              <div className="relative h-4"> <button className="absolute right-10 bg-green-600 text-white font-bold  rounded-lg pl-4 pr-4" onClick={() => setIsAddOpen(true)}>Add</button></div>
              <ModalAdd
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onAdd={handleAddUser}
              />
            <DataTable
                value={customers}
                paginator
                rows={6}
                className="p-datatable-customers custom-header mt-3"
                dataKey="id"
                responsiveLayout="scroll"
                >
                <Column header=" " selectionMode="multiple" style={{ width: "4rem", margin: "0 auto" }} />
                <Column header="Customer Name" body={customerBodyTemplate} style={{ minWidth: "6rem" }} />               
                <Column field="company" header="Company" body={companyTemplate} style={{ minWidth: "6rem" }} />
                <Column header="Order Value" body={orderValueTemplate} />
                <Column header="Order Date" body={orderDateTemplate} />
                <Column header="Status" body={statusBodyTemplate} />
                <Column body={(rowData) => <button onClick={() => handleEditClick(rowData)}>
                                      <img src={Create} alt="Edit" />
                                    </button> } />
                
            </DataTable>
            <EditUserModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              user={selectedCustomer}
              onSave={(updatedCustomer) => {
                const updatedList = customers.map((c) =>
                  c.id === updatedCustomer.id ? updatedCustomer : c
                );
                setCustomers(updatedList);
                setIsModalOpen(false);
              }}
            />
            
            <span className="block ml-7 text-sm text-gray-500">{customers.length} results</span>
            </div>

        </div>
     )
}