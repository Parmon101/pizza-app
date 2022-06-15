import React from 'react';

type CategoriesType = {
    value: number;
    onClickCategory: (index: number) => void;
};

const categories = ['все', 'Классичекие', 'Ягодное', 'Фруктовое', 'Особое', 'Без сахара'];

export const Categories: React.FC<CategoriesType> = ({ value, onClickCategory }) => {
    return (
        <div className="categories">
            <ul>
                {categories.map((categotyName, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            onClickCategory(index);
                        }}
                        className={value === index ? 'active' : ''}>
                        {categotyName}
                    </li>
                ))}
            </ul>
        </div>
    );
};
