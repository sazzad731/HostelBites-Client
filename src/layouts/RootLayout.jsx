import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className='max-w-7xl mx-auto'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;