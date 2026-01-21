import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

