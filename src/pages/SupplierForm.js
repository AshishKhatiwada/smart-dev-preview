import React, { useState } from "react";

const SupplierForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    productType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend or Formspree
    alert("Thank you for your interest! We'll be in touch.");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6">Become a SmartDev Supplier</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="companyName" required onChange={handleChange} placeholder="Company Name" className="w-full border p-2 rounded" />
        <input name="contactName" required onChange={handleChange} placeholder="Contact Name" className="w-full border p-2 rounded" />
        <input type="email" name="email" required onChange={handleChange} placeholder="Email Address" className="w-full border p-2 rounded" />
        <input name="productType" required onChange={handleChange} placeholder="Product Type" className="w-full border p-2 rounded" />
        <textarea name="message" rows="4" onChange={handleChange} placeholder="Message" className="w-full border p-2 rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default SupplierForm;
