import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './componentes/ProductsList';
import CategoriesMenu from './componentes/CategoriesMenu';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <CategoriesMenu />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<ProductsList />} />
                        <Route path="/:categoryId" element={<ProductsList />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
