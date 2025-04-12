import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

const AddUserModal = ({ isOpen, onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Company: '',
    Ordervalue: '',
    date: '',
    avatar: '',
    status: 'new'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e) => {
    const date = e.value;
    const formatted = date.toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, date: formatted }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Thêm mới thất bại');

      const newUser = await response.json();
      onAdd(newUser); 
      onClose();
    } catch (error) {
      console.error(error);
      alert('Lỗi khi thêm người dùng!');
    }
  };

  const footer = (
    <div className="flex justify-end gap-2">
      <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" onClick={onClose} />
      <Button label="Add" icon="pi pi-plus" className="p-button-success" onClick={handleSubmit} />
    </div>
  );

  return (
    <Dialog
      header="Add New Customer"
      visible={isOpen}
      style={{ width: '30vw' }}
      modal
      className="p-fluid bg-black text-white  p-2"
      onHide={onClose}
      footer={footer}
    >
      <div className="flex flex-col gap-3">
        <div>
          <label className="block mb-1">Name</label>
          <InputText name="Name" value={formData.Name} onChange={handleChange}  className='border-1 border-white bg-white text-black'/>
        </div>

        <div>
          <label className="block mb-1">Company</label>
          <InputText name="Company" value={formData.Company} onChange={handleChange} className='border-1 border-white bg-white text-black'/>
        </div>

        <div>
          <label className="block mb-1">Order Value</label>
          <InputText name="Ordervalue" value={formData.Ordervalue} onChange={handleChange}className='border-1 border-white bg-white text-black' />
        </div>

        <div>
          <label className="block mb-1">Order Date</label>
          <Calendar
            value={formData.date ? new Date(formData.date) : null}
            onChange={handleDateChange}
            showIcon
            dateFormat="yy-mm-dd"
           
          />
        </div>

        <div>
          <label className="block mb-1">Avatar URL</label>
          <InputText name="avatar" value={formData.avatar} onChange={handleChange}className='border-1 border-white bg-white text-black  text-black' />
        </div>
      </div>
    </Dialog>
  );
};

export default AddUserModal;
