import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Cart } from './pages/Cart';
import { FullInfoProduct } from './pages/ FullInfoProduct';
import { Home } from './pages/Home';
import { NotFoundePage } from './pages/NotFoundePage';
import './scss/app.scss';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/product/:id" element={<FullInfoProduct />} />
                        <Route path="*" element={<NotFoundePage />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
