
import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import Header from './components/Header';

const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => {
  const location = useLocation();

  // Define valid routes here
  const validRoutes = [
    { path: '/' },
    { path: '/cart' },
    { path: '/product/:id' }
  ];

  // Check if current path matches any valid route
  const isValidRoute = validRoutes.some(route =>
    matchPath(route.path, location.pathname)
  );

  return (
    <div>
      {/* Show Header only if valid route */}
      {isValidRoute && <Header />}

      <main className="container">
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;

