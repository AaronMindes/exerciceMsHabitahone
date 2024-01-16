import React, { useEffect, useState } from 'react';
import Product from '../../components/product/Product';
import FilterCategory from '../../components/filterCategory/FilterCategory';
import { marketListService } from '../../services/market.service';
import ListProducts from '../../components/listProducts/ListProducts';
import { ICategory, IMarketData, IProduct } from '../../components/IMarketProduct';
import './MarketStyle.css';
import { NavLink } from 'react-router-dom';

const Market = () => {
  const [list, setList] = useState<IMarketData>();
  const [filteredProducts, setFilteredProducts] = useState<ICategory | undefined>(undefined);
  const [endOrder, setEndOrder] = useState<any[]>();

  const handleFilterChange = (filteredList: ICategory) => {
    setFilteredProducts(filteredList);
  };

  const updateList = (updatedCategory: ICategory) => {
    if (!list || !list.categories) {
      return;
    }

    const updatedCategories = [...list.categories];
    const index = updatedCategories.findIndex((c) => c.categoryID === updatedCategory.categoryID);

    if (index !== -1) {
      updatedCategories[index] = updatedCategory;
    }

    setList((prevList) => ({
      ...prevList,
      categories: updatedCategories,
    }));
  };

  useEffect(() => {
    if (list) {
      const filteredList = list.categories.map(category => ({
        ...category,
        products: category.products.filter(product => product.quantity && product.quantity > 0),
      })).filter(category => category.products.length > 0);

      setEndOrder(filteredList);
    }
  }, [list]);

  const getProducts = async () => {
    try {
      const produitsData: IMarketData = await marketListService.getProduits();
      setList(produitsData);
    } catch (error) {
      console.error('Error when get products', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='market-container'>
      <FilterCategory list={list || { categories: [] }} onFilterChange={handleFilterChange} />
      <ListProducts list={filteredProducts} updateList={updateList} />
      <NavLink to='/orders' state={{ endOrder }} className='nav-button'>Order End</NavLink>
    </div>
  );
};

export default Market;
