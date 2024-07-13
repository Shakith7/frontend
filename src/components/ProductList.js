import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const result = await getProducts();
    setProducts(result.data);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      {/* <h2 className="text-2xl font-bold mb-4">Product List</h2> */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100 text-xs text-zinc-500">
            <th className="py-2 px-4 border-b border-gray-200 text-left ">Product Image</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left ">Category</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left ">Quantity</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left ">Unit Price</th>
            <th className="py-2 px-4 border-b border-gray-200 text-left ">Total Revenue</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-200" >
                <img src={product.image} alt={product.name} className="w-12 h-12 object-cover" />
                <Link to={`/edit-product/${product._id}`} className="text-blue-500 hover:underline">{product.name}</Link>
                {/* Display SKU code */}
                <p className="text-gray-500 text-sm">{product.sku}</p>
              </td>
              <td className="py-2 px-4 border-b border-gray-200 text-[#764EE8] font-semibold">{product.category}</td>
              <td className="py-2 px-4 border-b border-gray-200">{product.units}</td>
              <td className="py-2 px-4 border-b border-gray-200">${product.price}</td>
              <td className="py-2 px-4 border-b border-gray-200">{product.units}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
