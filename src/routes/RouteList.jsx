import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import ProductLayout from '../pages/ProductLayout';
import ProductDetail from '../pages/ProductDetail';
import Product from '../pages/Product';
import EditApplication from '../pages/EditApplication';

export const RouteList = [
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/product',
    element: <ProductLayout />,
    children: [
      {
        index: true,
        element: <Product />,
      },
      {
        path: 'product-detail',
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: '/edit-application',
    element: <EditApplication />,
  },
];
