import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

const EditProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadProduct();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:5000/api/products/${id}`);
        navigate('/products');
      } catch (error) {
        console.error(error.response.data);
      }
    }
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      {product ? (
        <>
          <ProductForm product={product} isEditing={true} />
          <div className="fixed bottom-6 right-60">
            <button
              onClick={handleDelete}
              className="py-2 px-4 text-red-600 font-semibold rounded-md hover:bg-red-100"
            >
              Delete Product
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditProductPage;