import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HyperLighting from './pages/HyperLighting';
import Products from './pages/Products';
import Products2 from './pages/Products2';
import Products3 from './pages/Products3';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <CustomCursor />

        {/* Cinematic Overlays */}
        <div className="fixed inset-0 pointer-events-none z-[88] opacity-[0.03] animate-grain"
          style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
        <div className="fixed inset-0 pointer-events-none z-[89] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(139,126,116,0.05)_100%)]" />

        <Routes>
          <Route path="/" element={<HyperLighting />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products2" element={<Products2 />} />
          <Route path="/products3" element={<Products3 />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
}

export default App;
