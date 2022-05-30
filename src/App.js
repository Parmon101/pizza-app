import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFoundePage } from './pages/NotFoundePage';
import './scss/app.scss';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="*" element={<NotFoundePage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
