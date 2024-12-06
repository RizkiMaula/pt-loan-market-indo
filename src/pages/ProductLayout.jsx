import { Outlet } from 'react-router-dom';
import Header from '../components/fragments/Header';
import Sidebar from '../components/fragments/Sidebar';
import { Button } from '@mui/material';
import ButtonMat from '../components/fragments/ButtonMat';

const ProductLayout = () => {
  return (
    <div className="w-full transition-colors duration-500 border-2 border-black dark:bg-darkColor dark:text-lightTextColor">
      <Sidebar />
      <Header title="Product" />
      <Outlet />
    </div>
  );
};

export default ProductLayout;
