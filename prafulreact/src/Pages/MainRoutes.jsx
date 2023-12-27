import React from 'react'
import "../App.css"
import { Route, Routes} from "react-router-dom"
import Homepage from './Homepage'
import Latest from './Latest'
import About from './About'
import ContentCategory from './ContentCategory'
import ArticleDesc from "./ArticleDesc"
import Connect from './Connect'
import Connect1 from './Connect1'
import Tag from '../Components/Tag'
import Privacy from './Privacy'
import DoNotSell from './DoNotSell'
import Topic from './Topic'
import NotFound from '../Components/NotFound'
import Searchlist from './Searchlist'
import Lazy from '../Components/Lazy'
import Scrolltop from '../Components/Scrolltop'



const MainRoutes = () => {



  return (
       
  
        <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/Latest" element={<Latest />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route path="/ContentCategory" element={<ContentCategory />}></Route>
    <Route path="/ArticleDesc" element={<ArticleDesc />}></Route>
    <Route path="/Connect" element={<Connect />}></Route>
    <Route path="/Connect1" element={<Connect1 />}></Route>
    <Route path='/Tag' element={<Tag />} ></Route>
    <Route path='/Privacy' element={<Privacy />} ></Route>
    <Route path='/opt-out-form' element={<DoNotSell />} ></Route>
    <Route path='/NotFound' element={<NotFound />}></Route>
    <Route path='/Lazy' element={<Lazy />}></Route>
    <Route path='/Scrolltop' element={<Scrolltop />}></Route>
    <Route exact path="/tag/:subcat" element={<Tag />} />
    <Route exact path="/:cat_slug/:post_name" element={<Topic />} />
    {/* <Route exact path="/:post_name" element={<Topic />} /> */}
    <Route exact path="/topic/:cat" element={<ContentCategory />} />
    <Route exact path="/topic/:cat/:subcat" element={<ContentCategory />} />
    <Route exact path='/search/:cat/:searchVal' element={<Searchlist />} />
    <Route exact path='/search/:cat/:searchVal/:subcat' element={<Searchlist />} />
    
    <Route path="*" element={<NotFound />}   />
   </Routes>
  
   

  )
}

export default MainRoutes;