import React, { useEffect, useState } from 'react';
import './FilterCategoryStyle.css';
import { ICategory, IMarketData } from '../IMarketProduct';

interface FilterCategoryProps {
    list: IMarketData;
    onFilterChange: (filteredList: ICategory) => void;
}

const FilterCategory: React.FC<FilterCategoryProps> = ({ list, onFilterChange }) => {
    const [category, setCategory] = useState([
        { name: 'Fruits', selected: false },
        { name: 'Vegetables', selected: false },
        { name: 'Household Products', selected: false },
        { name: 'Pastries', selected: false },
        { name: 'Meat', selected: false },
        { name: 'Fish', selected: false },
    ]);

    const handleCategoryClick = (index: number) => {
        const updatedCategory = category.map((c, i) => ({
            ...c,
            selected: i === index ? !c.selected : false,
        }));
        setCategory(updatedCategory);
        const updatedList: ICategory | undefined = list.categories.find(c => c.categoryID == (index + 1));
        if (updatedList) {
            onFilterChange(updatedList);
        }
    };

    return (
        <div className='filter-category-container'>
            <h2>Categories:</h2>
            {category.map((c, index) => (
                <div key={index} className={`category ${c.selected ? 'active' : ''}`} onClick={() => handleCategoryClick(index)}>
                    {c.name}
                </div>
            ))}
        </div>
    );
};


export default FilterCategory;
