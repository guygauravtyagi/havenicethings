import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home';
import Blog from './pages/blogs/Blog';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
