import React from "react";

import "../Styles/Content.css";
import SearchTab from "../Components/SearchTab";
import { useParams } from "react-router-dom";

const Searchlist = () => {
  const {  searchVal } = useParams();
  return (
    <div>
      <div className="container container-max">
        <div className="row">

            
          <div className="col-md-12">
            <h1 className="fw-bold py-1 mt-3">Search Result : {searchVal}</h1>
          </div>
          <div className="hr"></div>

          <SearchTab />

          <div className="container container-max ">
        <div className="row mt-5 spaceincontentbottm">
          <div className="col-md-12 mb-2 borderB">
            <div >
             <a href="/"> <img
                style={{ width: "100%" }}
                src="https://enterprisetalk.com/wp-content/uploads/2023/11/BlackNP-1.png"
                alt="banner"
              /> </a>
            </div>
          </div>
        </div>
      </div>


        </div>

        
      </div>
    </div>
  );
};

export default Searchlist;
