
import React from 'react';


import MainPageComp from './MainPageComp';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import TagPageComp from './TagPageComp';
import ContentCategory from './ContentCategory';
import Topic from './Topic';
import About from './About';
import Privacy from './Privacy';
import Donotsell from './Donotsell';
import NotFound from '../Component/NotFound';
import Contact from './Contact';


const MainRoutes = () => {
  return (

    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPageComp />}></Route>
      <Route path='/tag' element={<TagPageComp />} />
      <Route path='/news/data' element={<Topic/>} />
      <Route path='/leadership/data' element={<Topic/>} />
      <Route path='/future/data' element={<Topic/>} />
      <Route path='/contentcategory' element={<ContentCategory />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path='/privacy-policy' element={<Privacy />}></Route>
      <Route path='/opt-out-form' element={<Donotsell />}></Route>
      <Route path="/contact-us" element={<Contact />}></Route>

      <Route path="*" element={<NotFound />}></Route>
      </Routes>
      </BrowserRouter>
    
    </>

  );
}

export default MainRoutes;