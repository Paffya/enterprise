import React from 'react'
import "../App.css"
import { Route, Routes} from "react-router-dom"
import Homepage from './Homepage'
import Latest from './Latest'
import About from './About'
import ContentCategory from './ContentCategory'
import ArticleDesc from "./ArticleDesc"
import Connect from './Connect'
import Tag from '../Components/Tag'
import Privacy from './Privacy'
import DoNotSell from './DoNotSell'
// import Sidebar from '../Components/Sidebar'
// import PostList from "../Components/PostList"
// import Search from './Search'
import Topic from './Topic'



const MainRoutes = () => {



  return (
       
  
        <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/Latest" element={<Latest />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route path="/ContentCategory" element={<ContentCategory />}></Route>
    <Route path="/ArticleDesc" element={<ArticleDesc />}></Route>
    <Route path="/Connect" element={<Connect />}></Route>
    <Route path='/Tag' element={<Tag />} ></Route>
    <Route path='/Privacy' element={<Privacy />} ></Route>
    <Route path='/DoNotSell' element={<DoNotSell />} ></Route>
    <Route exact path="/tag/:subcat" element={<Tag />} />
    {/* <Route exact path="/search/:searchval" element={<Search />} /> */}
    <Route exact path="/topic/:searchval" element={<Topic />} />
    <Route exact path="/ContentCategory/:result" element={<ContentCategory />} />
    {/* <Redirect exact from="/Tag" to="/ArticleDesc" /> */}
    {/* <Route path="/PostList" element={<PostList />}></Route> */}
    {/* <Route path="/Latest" element={ <Navigate replace to="/" /> } ></Route> */}
      {/* <Route path="/Latest" element={<Navigate to="/" replace />} /> */}
    
    
   </Routes>
  
   

  )
}

export default MainRoutes