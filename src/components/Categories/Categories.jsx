import React from 'react';

export const Categories = () => {
    const [active, setActive] = React.useState(0);

    const onClickActive = (index) => {
        setActive(index);
    };

    const categories = ['все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
                {categories.map((title, index) => (
                    <li
                        onClick={() => {
                            onClickActive(index);
                        }}
                        className={active === index ? 'active' : ''}>
                        {title}
                    </li>
                ))}
            </ul>
        </div>
    );
};
