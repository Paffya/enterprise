import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {HelmetProvider} from "react-helmet-async";
import MainRoutes from './Pages/MainRoutes';

import Footer from './Components/Footer';

function App() {
  const helmetContext = {};
  
  return (
    <div>
      <HelmetProvider context={helmetContext}>
      <Navbar />
      <MainRoutes />
      <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
