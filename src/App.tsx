import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ErrorPage from './pages/errorPage/ErrorPage';
import Orders from './pages/orders/Orders';
import Market from './pages/market/Market';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="market" element={<Market />} />
      <Route path="orders" element={<Orders />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
