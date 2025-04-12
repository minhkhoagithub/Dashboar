import React, { useState, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

const ToggleToggle = ({ isOpen, onClose, user, onSave }) => {
  const [formData, setFormData] = useState(user || {});

  useEffect(() => {
    setFormData(user || {});
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e) => {
    const date = e.value;
    const formatted = date.toISOString().split('T')[0]; // format yyyy-mm-dd
    setFormData((prev) => ({ ...prev, date: formatted }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`https://67cd2e68dd7651e464ed8f46.mockapi.io/api/v1/id/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Cập nhật thất bại');
      }
  
      const updatedUser = await response.json();
      onSave(updatedUser); // Trả lại cho component cha nếu muốn cập nhật danh sách
      onClose();
    } catch (error) {
      console.error('Lỗi khi gọi API:', error);
      alert('Cập nhật không thành công!');
    }
  };

  const footer = (
    <div className="flex justify-end gap-2">
      <Button label="Cancel" icon="pi pi-times" className="p-button-secondary" onClick={onClose} />
      <Button label="Save" icon="pi pi-check" className="p-button-success" onClick={handleSubmit} />
    </div>
  );

  return (
    <Dialog
      header="Edit Customer"
      visible={isOpen}
      style={{ width: '30vw' }}
      modal
      className="p-fluid bg-black text-white"
      onHide={onClose}
      footer={footer}
    >
      <div className="flex flex-col gap-3">
        <div>
          <label className="block mb-1">Name</label>
          <InputText name="Name" value={formData.Name || ''} onChange={handleChange} />
        </div>

        <div>
          <label className="block mb-1">Company</label>
          <InputText name="Company" value={formData.Company || ''} onChange={handleChange} />
        </div>

        <div>
          <label className="block mb-1">Order Value</label>
          <InputText name="Ordervalue" value={formData.Ordervalue || ''} onChange={handleChange} />
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
      </div>
    </Dialog>
  );
};

export default ToggleToggle;
