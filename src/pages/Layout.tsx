import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../compontnts/Header.tsx';

const Layout: FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 pb-20 font-roboto text-white">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
