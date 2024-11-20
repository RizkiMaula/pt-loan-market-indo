import { Outlet } from 'react-router-dom';
import HeaderProduct from '../components/fragments/HeaderProduct';

const ProductLayout = () => {
  return (
    <div className="w-full transition-colors duration-500 border-2 border-black dark:bg-darkColor dark:text-lightTextColor">
      <HeaderProduct />
      <Outlet />
    </div>
  );
};

export default ProductLayout;
