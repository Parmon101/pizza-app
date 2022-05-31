import React from 'react';

export const Categories = ({ value, onClickCategory }) => {
    const categories = ['все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

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
