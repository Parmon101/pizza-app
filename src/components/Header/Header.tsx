import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';
import { Search } from '../ Search/Search';

type CartType = {
    cart: {
        totalPrice: number;
        items: [];
    };
};

export const Header: React.FC = () => {
    const { totalPrice, items } = useSelector((state: CartType) => state.cart);
    const totalCout = items.reduce((sum: number, item: any) => sum + item.count, 0);

    const isMount = React.useRef(false);

    React.useEffect(() => {
        if (isMount.current) {
            const json = JSON.stringify(items);
            localStorage.setItem('cart', json);
        }
        isMount.current = true;
    }, [items]);

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="60" src={logo} alt="logo" />
                        <div>
                            <h1>Shop</h1>
                            <p> так вкусно, что скулы сводит </p>
                        </div>
                    </div>
                </Link>
                <Search />
                <div className="header__cart">
                    <Link to="/cart" className="button button--cart">
                        <span>{totalPrice} ₽</span>
                        <div className="button__delimiter"></div>
                        <img className="button__img--cart" width="20" src={cart} alt="cart" />
                        <span>{totalCout}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
