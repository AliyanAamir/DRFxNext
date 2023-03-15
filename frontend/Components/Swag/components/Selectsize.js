import React, { useState } from 'react';

function SelectSize() {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
   <>
      <button
        onClick={() => handleSizeClick('L')}
        style={{ border: selectedSize === 'L' ? '2px solid black' : '1px solid black' }}
        className="btn rounded-0 fw-bold"
      >
        L
      </button>
      <button
        onClick={() => handleSizeClick('S')}
        style={{ border: selectedSize === 'S' ? '2px solid black' : '1px solid black' }}
        className="btn rounded-0 fw-bold"
      >
        S
      </button>
      <button
        onClick={() => handleSizeClick('XL')}
        style={{ border: selectedSize === 'XL' ? '2px solid black' : '1px solid black' }}
        className="btn rounded-0 fw-bold"
      >
        XL
      </button>
      </>
  );
}

export default SelectSize;
