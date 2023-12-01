import React from "react";

import "../Styles/Content.css";
import SearchTab from "../Components/SearchTab";
import { useParams } from "react-router-dom";

const Searchlist = () => {
  const { cat } = useParams();
  return (
    <div>
      <div className="container container-max">
        <div className="row">

            
          <div className="col-md-12">
            <h1 className="fw-bold py-1 mt-3">{cat}</h1>
          </div>
          <div className="hr"></div>

          <SearchTab />

          

          <div className="container container-max ">
            <div className="row mt-5 ">
              <div className="col-md-12 mb-5 borderB">
                <div
                  style={{ height: "150px", backgroundColor: "#ebebeb" }}
                ></div>
              </div>
            </div>
          </div>


        </div>

        
      </div>
    </div>
  );
};

export default Searchlist;
