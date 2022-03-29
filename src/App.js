import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/main/main';
import About from './pages/about/about';
import Pricing from './pages/pricing/pricing';
import Contact from './pages/contact/contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="main" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
