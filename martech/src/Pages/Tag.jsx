import React, {useState, useEffect} from 'react'
import dummy from "../Images/pppppp.webp";
import { DataComp } from "./DataComp";
import {ArticleComp}  from './TagPage/ArticleComp';
import QuickTagComp from "./TagPage/QuickTagComp"
// import PodcastComp from './TagPage/PodcastComp';
import HotSeatComp from './TagPage/HotSeatComp';
import FutureReadyComp from './TagPage/FutureReadyComp';
import GuestAuthorComp from './TagPage/GuestAuthorComp';
import LearningComp from './TagPage/LearningComp';
import PodcastComp from './PodcastComp';

const Tag = () => {

    const [loading, setLoading] = useState(false);

    const [activeKey, setActiveKey] = useState("tab1");
  
    const handleTabSelect = (key) => {
      setActiveKey(key);
    };

    

  return (
    <div>


        <div className="container">
        <div className="row">
        <h1 className="fw-bold py-1 mt-3 mb-3">Artificial Intelligence</h1>
        <h2 className="fw-bold borderB py-1 h4">News</h2>
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="col-md-4" key={index}>
          <div className="mainSecondBox mt-3">
            {loading ? (
              <p></p>
            ) : (
              <div className="hover01">
                <DataComp src={dummy} alt="second" />
                <div className="padLR"></div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
        </div>


<ArticleComp />

<QuickTagComp />

<PodcastComp />

<HotSeatComp />

<FutureReadyComp />

<GuestAuthorComp />

<LearningComp />


    </div>
  )
}

export default Tag