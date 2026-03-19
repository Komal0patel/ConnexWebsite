import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HyperLighting from './pages/HyperLighting';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import THEME from './constants/theme';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <CustomCursor />

        {/* Cinematic Overlays */}
        <div
          className="fixed inset-0 pointer-events-none z-[88] opacity-[0.03] animate-grain"
          style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
        />
        <div
          className="fixed inset-0 pointer-events-none z-[89]"
          style={{ background: `radial-gradient(circle_at_center, transparent 0%, ${THEME.colors.primaryAlpha(0.05)} 100%)` }}
        />

        <Routes>
          <Route path="/" element={<HyperLighting />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </SmoothScroll>
    </Router>
  );
}

export default App;

