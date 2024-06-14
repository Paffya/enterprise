import React from "react";
import "../App.css";
import { Route, Routes , Router} from "react-router-dom";
import ContentCategory from "./ContentCategory";
import Tag from "../Components/Tag";
import NotFound from "../Components/NotFound";
import Lazy from "../Components/Lazy";
import Scrolltop from "../Components/Scrolltop";
import Homepage from "./Homepage";

import About from "./About";

import Connect from "./Connect";
import Author from "./Author";
import Privacy from "./Privacy";
import DoNotSell from "./DoNotSell";
import Topic from "./Topic";
import Searchlist from "./Searchlist";
import Unsubscribe from "./Unsubscribe";
import PostPreview from "./PostPreview";
import Sitemap from "./Sitemap";
// import Sitemappost from "./Sitemappost";
// import Sitemapsubcategory from "./Sitemapsubcategory";
// import Sitemapcategory from "./Sitemapcategory";
// import Sitemapmisc from "./Sitemapmisc";






const MainRoutes = () => {
  return (

    
    <>

{/* <Router basename="/:7000"> */}
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      
      <Route path="/About" element={<About />}></Route>
      <Route path="/ContentCategory" element={<ContentCategory />}></Route>
    
      <Route path="/contact-us" element={<Connect />}></Route>
      <Route path="/Author" element={<Author />}></Route>
      <Route path="/Unsubscribe" element={<Unsubscribe />}></Route>
      <Route path="/Tag" element={<Tag />}></Route>
      <Route path="/Privacy" element={<Privacy />}></Route>
      <Route path="/opt-out-form" element={<DoNotSell />}></Route>
      <Route path="/sitemap" element={<Sitemap />}></Route>
      <Route path="/NotFound" element={<NotFound />}></Route>
      <Route path="/Lazy" element={<Lazy />}></Route>
      <Route path="/Scrolltop" element={<Scrolltop />}></Route>
      <Route exact path="/tag/:subcat" element={<Tag />} />
      <Route exact path="/:cat_slug/:post_name" element={<Topic />} /> 
      {/* <Route exact path="/:post_name" element={<Topic />} /> */}
      <Route exact path="/topics/:cat" element={<ContentCategory />} />
      <Route exact path="/topics/:cat/:subcat" element={<ContentCategory />} />
      <Route exact path="/search/:cat/:searchVal" element={<Searchlist />} />
      <Route exact path="/search/:cat/:searchVal/:subcat" element={<Searchlist />} />
      {/* 
      <Route path="/sitemap-posts.xml" element={<Sitemappost />}></Route>
      <Route path="/sitemap-subcategory.xml" element={<Sitemapsubcategory />}></Route>
      <Route path="/sitemap-category.xml" element={<Sitemapcategory />}></Route>
      <Route path="/sitemap-misc.xml" element={<Sitemapmisc />}></Route> */}
       
     
     



      {/* Post detail page preview  */}
      <Route exact path="/preview/:cat_slug/:post_name"  element={<PostPreview />} />
      {/* Post detail page preview  */}


  

      <Route path="*" element={<NotFound />} />

      
    </Routes>
    {/* </Router> */}

 {/* <Navigate exact from=":7000/:cat_slug/:post_name" to="/:cat_slug/:post_name" >

    </Navigate> */}

    

    </>
    
  );
};

export default MainRoutes;