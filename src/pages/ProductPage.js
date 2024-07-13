import React from 'react';
import ProductList from '../components/ProductList';

const ProductPage = () => {
  return (
    <div>
      {/* <h1 className='text-2xl font-semibold'>Products</h1> */}
      {/* Tailwind css searchbar */}
      <div className='p-6 bg-white shadow-md rounded-md'>
        <h2 className='text-2xl font-bold mb-4'>Product List</h2>
        <input type='text' placeholder='Search Products' className='p-2 border border-gray-300 rounded-md shadow-sm w-8/12   ' />
        <a href="/add-product" className='fixed right-10 py-2 px-4 bg-[#764EE8] text-white font-semibold rounded-md hover:bg-[#C8B8F6]'>Add Product</a>
      </div>
      
      <ProductList />
    </div>
  );
};

export default ProductPage;
