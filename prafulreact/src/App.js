import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {HelmetProvider} from "react-helmet-async";
import MainRoutes from './Pages/MainRoutes';

import Footer from './Components/Footer';

function App() {


  const helmetContext = {};

  // Determine if the current page is Sitemappost
  const isSitemappostPage = window.location.pathname === '/sitemap-posts.xml';
  const isSitemapsubcategoryPage = window.location.pathname === '/sitemap-subcategory.xml';
  const isSitemapcategoryPage = window.location.pathname === '/sitemap-category.xml';
  const isSitemapmiscPage = window.location.pathname === '/sitemap-misc.xml';
  
  return (
    <div>
      <HelmetProvider context={helmetContext}>
       {/* Conditionally render Navbar */}
       {!isSitemappostPage && !isSitemapsubcategoryPage && !isSitemapcategoryPage && !isSitemapmiscPage && <Navbar />}
       
      <MainRoutes />
      {/* <Footer /> */}
      {!isSitemappostPage && !isSitemapsubcategoryPage && !isSitemapcategoryPage && !isSitemapmiscPage && <Footer />}
      </HelmetProvider>
    </div>
  );
}

export default App;
