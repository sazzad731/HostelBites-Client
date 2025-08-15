import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <div className='pt-30'>
      <header className="fixed top-0 right-0 left-0 z-50 bg-base-100 shadow-md font-inter">
        <Header />
      </header>
      <main className="max-w-7xl xl:mx-auto mx-3 font-poppins">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;