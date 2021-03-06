import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/shared/Theme';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default App;
