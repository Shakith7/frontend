// src/components/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CategoryImageSelector from './CategoryImageSelector';

const ProductForm = ({ product, isEditing }) => {
  const [sku, setSku] = useState(product?.sku || '');
  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [units, setUnits] = useState(product?.units || 0);
  const [unitType, setUnitType] = useState(product?.unitType || '');
  const [price, setPrice] = useState(product?.price || 0);
  const [category, setCategory] = useState(product?.category || '');
  const [customCategory, setCustomCategory] = useState('');
  const [image, setImage] = useState(product?.image || '');

  const navigate = useNavigate();

  const categories = [
    'Electronics',
    'Clothing',
    'Books',
    'Home & Garden',
    'Toys',
    'Sports',
    'Automotive',
    'Health & Beauty',
    'Food & Beverage',
    'Other'
  ];

  // Corrected image links
  const categoryImages = {
    Electronics: [
      'https://drive.google.com/uc?export=view&id=1Y8TAyqf6zZJmATonx675gR0mCaRfkvWs',
      'https://drive.google.com/uc?export=view&id=1A5WxSiPOKbAXv-H4peJupwSdKuKKuxyK',
      'https://drive.google.com/uc?export=view&id=1zopfIk7zMR9kpWG-YWMWricptPvoh6Mj',
      'https://drive.google.com/uc?export=view&id=1zMNQK5Pe90NAWeiUBkE6RuKPV1Mp5eGn',
      'https://drive.google.com/uc?export=view&id=10IkV244c6Nx-nhH1qx87jolfDGJnD2d7',
    ],
    // Add other categories similarly
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      sku,
      name,
      description,
      units,
      unitType,
      price,
      category: category === 'Other' ? customCategory : category,
      image,
    };

    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/products/${product._id}`, newProduct);
      } else {
        await axios.post('http://localhost:5000/api/products', newProduct);
      }
      navigate('/products');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-6 max-w-6xl mx-auto">
      <div className="w-3/5 bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">General Information</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Product SKU</label>
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            required
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#764EE8] focus:border-[#764EE8] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#764EE8] focus:border-[#764EE8] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#764EE8] focus:border-[#764EE8] focus:outline-none"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">Units</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Units</label>
          <input
            type="number"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            required
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#764EE8] focus:border-[#764EE8] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Unit</label>
          <input
            type="text"
            value={unitType}
            onChange={(e) => setUnitType(e.target.value)}
            required
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#764EE8] focus:border-[#764EE8] focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Price per Unit</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#764EE8] focus:border-[#764EE8] focus:outline-none"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">Category</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#764EE8] focus:border-[#764EE8] focus:outline-none"
          >
            <option value="">Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        {category === 'Other' && (
          <div>
            <label className="block text-sm font-medium text-gray-700">Custom Category</label>
            <input
              type="text"
              value={customCategory}
              onChange={(e) => setCustomCategory(e.target.value)}
              required
              className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#764EE8] focus:border-[#764EE8] focus:outline-none"
            />
          </div>
        )}
      </div>

      <div className="w-2/5 bg-white shadow-md rounded-lg p-6 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Product Image</h2>
        <CategoryImageSelector categoryImages={categoryImages} setImage={setImage} />
        {image && (
          <div className="mt-4">
            <img src={image} alt="Product" className="max-w-full h-auto rounded-lg" />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="fixed bottom-6 right-20 py-2 px-4 bg-[#764EE8] text-white font-semibold rounded-md hover:bg-blue-700"
      >
        {isEditing ? 'Save Changes' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
