import { Routes, Route, useLocation } from 'react-router-dom';
import Register from './pages/Register/Register.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Blog from './pages/Blog/Blog.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Food from './components/Food/Food.jsx';
import Card from './components/Card/Card.jsx';

function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/Home" element={<Home />} />
      </Routes>

      {location.pathname === '/' && (
        <>
          <Food />
          <Card />
          <Card />
          <Card/>
          <Card />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
