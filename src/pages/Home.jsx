import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';

import { setCategoryId, setFilters } from '../redux/slices/filterSlice';
import { SearchContext } from '../App';
import { Categories } from '../components/Categories/Categories';
import { ProductBlock } from '../components/ProductBlock/ProductBlock';
import { Skeleton } from '../components/ProductBlock/Skeleton';
import { Sort, sortList } from '../components/Sort/Sort';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSearch = React.useRef(false);
    const isMount = React.useRef(false);

    const categoryId = useSelector((state) => state.filter.categoryId);
    const sortType = useSelector((state) => state.filter.sort.sortProperty);

    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const { searchValue } = React.useContext(SearchContext);

    const onClickCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    const fetchMenu = () => {
        setIsLoading(true);

        const sortBy = sortType.replace('-', '');
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';

        axios
            .get(
                `https://62921194cd0c91932b6ccbee.mockapi.io/moroz?${category}&sortBy=${sortBy}&order=${order}`,
            )
            .then((res) => {
                setItems(res.data);
                setIsLoading(false);
            });
    };

    // if change params and first render,если сначала выполнить рендеринг, затем проверить URL-параметры и сохранить в redux
    React.useEffect(() => {
        if (isMount.current) {
            const queryString = qs.stringify({
                sortProperty: sortType,
                categoryId,
            });

            navigate(`?${queryString}`);
        }
        isMount.current = true;
    }, [categoryId, sortType]);

    // if was first render, then check URL-params, and save in redux
    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sort = sortList.find((obj) => obj.sortProperty === params.sortProperty);

            dispatch(
                setFilters({
                    ...params,
                    sort,
                }),
            );
            isSearch.current = true;
        }
    }, []);

    // if was first render, then  get menu
    React.useEffect(() => {
        window.scroll(0, 0);

        if (!isSearch.current) {
            fetchMenu();
        }

        isSearch.current = false;
    }, [categoryId, sortType]);

    const pizzas = items
        .filter((obj) => {
            if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                return true;
            }
            return false;
        })
        .map((el) => <ProductBlock key={el.id} {...el} />);

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        </div>
    );
};
