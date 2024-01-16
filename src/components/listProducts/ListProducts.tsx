import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import { ICategory, IProduct } from '../IMarketProduct';

const ListProducts: React.FC<{ list: ICategory | undefined, updateList: any }> = ({ list, updateList }) => {
  const [listDisplay, setListDisplay] = useState<ICategory | undefined>();

  useEffect(() => {
    setListDisplay(list);
  }, [list]);

  const updateQuantity = (newQuantity: IProduct) => {
    if (list) {
      const updatedList: ICategory = {
        ...list,
        products: list.products?.map(p =>
          p.productID === newQuantity.productID ? { ...p, quantity: newQuantity.quantity } : p
        ),
      };
      updateList(updatedList);
    }
  };

  return (
    <div className='list-products-container'>
      {listDisplay?.products.map((p: IProduct) => (
        <Product key={p.productID} product={p} updateQuantity={updateQuantity}></Product>
      ))}
    </div>
  );
};

export default ListProducts;
