import React from 'react';
import { Categories } from '../components/Categories/Categories';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Sort } from '../components/Sort/Sort';

export const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://62921194cd0c91932b6ccbee.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json);
                setIsLoading(false);
            });
    }, []);
    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                    : items.map((el) => (
                          <PizzaBlock
                              title={el.title}
                              price={el.price}
                              imageUrl={el.imageUrl}
                              types={el.types}
                              sizes={el.sizes}
                              category={el.category}
                              rating={el.rating}
                              key={el.id}
                          />
                      ))}
            </div>
        </div>
    );
};
