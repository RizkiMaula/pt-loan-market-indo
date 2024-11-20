import { Outlet } from 'react-router-dom';
import Header from '../components/fragments/Header';

const ProductLayout = () => {
  return (
    <div className="w-full transition-colors duration-500 border-2 border-black dark:bg-darkColor dark:text-lightTextColor">
      <Header title="Product" />
      <Outlet />
    </div>
  );
};

export default ProductLayout;
