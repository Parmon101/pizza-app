import React from 'react';
import { Link } from 'react-router-dom';
import cartEmptyImg from '../../assets/cartEmpty.svg';

export const CartEmpty = () => {
    return (
        <div>
            <div className="cart cart--empty">
                <h2>
                    Корзина пустая <span>😿</span>
                </h2>
                <p>
                    Вы ничего не выбрали.
                    <br />
                    Для того, чтобы набрать заказ, перейди на главную страницу.
                </p>
                <img src={cartEmptyImg} alt="Empty cart" />
                <Link to="/" className="button button--black">
                    <span>Вернуться назад</span>
                </Link>
            </div>
        </div>
    );
};
