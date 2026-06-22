import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Transactions from "./assets/components/Transactions"
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        // login and registration routes
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        // other routes for customer management, transactions, etc. would go here
        <Route path="/customer/:id" element={<Customer />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Router>
  );
}
