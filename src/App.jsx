import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';


export default function App() {
  return (
    <Router>
      <Routes>
        // login and registration routes
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
