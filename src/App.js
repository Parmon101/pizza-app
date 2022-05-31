import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFoundePage } from './pages/NotFoundePage';
import './scss/app.scss';

export const SearchContext = React.createContext();

function App() {
    const [searchValue, setSearchValue] = React.useState('');

    return (
        <div className="App">
            <div className="wrapper">
                <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                    <Header />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="*" element={<NotFoundePage />} />
                        </Routes>
                    </div>
                </SearchContext.Provider>
            </div>
        </div>
    );
}

export default App;
