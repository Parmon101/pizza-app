import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';
import { PizzaBlock } from './components/PizzaBlock/PizzaBlock';
import { Sort } from './components/Sort/Sort';
import './scss/app.scss';

import pizza from './assets/pizzas.json';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {pizza.map((el) => {
                                return (
                                    <PizzaBlock
                                        title={el.title}
                                        price={el.price}
                                        imageUrl={el.imageUrl}
                                        types={el.types}
                                        sizes={el.sizes}
                                        category={el.category}
                                        rating={el.rating}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
