import React from 'react';
import ProductForm from '../components/ProductForm';

const AddProductPage = () => {
  return (
    <div>
      {/* h1 tag saying Add Product*/}
      <h1 className='text-4xl font-semibold'>Add Product</h1>
      {/* ProductForm component */}

      <ProductForm />
    </div>
  );
};

export default AddProductPage;
