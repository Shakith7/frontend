// src/components/CategoryImageSelector.js
import React from 'react';

const CategoryImageSelector = ({ categoryImages, setImage }) => {
  return (
    <div className="space-y-4">
      {Object.keys(categoryImages).map((category) => (
        <div key={category} className="space-y-2">
          <h3 className="text-xl font-semibold">{category}</h3>
          <div className="grid grid-cols-5 gap-4">
            {categoryImages[category].map((image, index) => (
              <img
                key={index}
                src={image}
                alt={category}
                className="w-full h-20 object-cover cursor-pointer rounded-lg border-2 border-transparent hover:border-purple-500"
                onClick={() => setImage(image)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryImageSelector;
