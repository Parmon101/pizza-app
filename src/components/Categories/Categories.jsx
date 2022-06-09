import React from 'react';

export const Categories = ({ value, onClickCategory }) => {
    const categories = ['все', 'Классичекие', 'Ягодное', 'Фруктовое', 'Особое', 'Без сахара'];

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
