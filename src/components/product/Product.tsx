import React, { useEffect, useState } from 'react';
import './ProductStyle.css';
import { IProduct } from '../IMarketProduct';

const Product: React.FC<{product:IProduct , updateQuantity:any}> = ({ product , updateQuantity }) => {
  const [quantityDisplay, setQuantityDisplay] = useState<number>(0);

  useEffect(() => {
    if(product.quantity){
      setQuantityDisplay(product.quantity);
    }else{
      setQuantityDisplay(0);
    }
  }, [product]);

  const changeQuantity = (change: number) => {
    setQuantityDisplay((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      if (newQuantity >= 0) {
        const updatedProduct = { ...product, quantity: newQuantity };
        updateQuantity(updatedProduct);
        return newQuantity;
      }
      return prevQuantity;
    });
  };
  return (
    <div className='product-container'>
      <div className='details'>
        <div>{product.productName}</div>
        <div>{product.price}$</div>
      </div>
      <div className='quantity'>
        <div className='add' onClick={() => changeQuantity(1)}>+</div>
        <div className='quantity-number'>{quantityDisplay}</div>
        <div className='remove' onClick={() => changeQuantity(-1)}>-</div>
      </div>
    </div>
  );
};

export default Product;
