import React, { useEffect, useState } from 'react';
import { getProductById } from '../services/productService';
import ProductForm from './ProductForm';

const ProductEdit = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const result = await getProductById(match.params.id);
      setProduct(result.data);
    };
    loadProduct();
  }, [match.params.id]);

  return (
    <div>
      <h2>Edit Product</h2>
      {product ? <ProductForm product={product} isEdit={true} /> : <p>Loading...</p>}
    </div>
  );
};

export default ProductEdit;
