import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Breadcrumb from './components/Breadcrumb';
import DashboardPage from './pages/Dashboard';
import AnalyticsPage from './pages/Analytics';
import ProductPage from './pages/ProductPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Breadcrumb />
          <div className="p-4">
            <Routes>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/add-product" element={<AddProductPage />} />
              <Route path="/edit-product/:id" element={<EditProductPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;