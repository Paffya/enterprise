import React from "react";

import "../Styles/Content.css";
import SelectTab from "../Components/SelectTab";


const ContentCategory = () => {
  return (
    <div>
      <div className="container container-max">
        <div className="row">

            
          <div className="col-md-12">
            <h1 className="fw-bold py-1 mt-3">News</h1>
          </div>
          <div className="hr"></div>

          <SelectTab />

          

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

export default ContentCategory;
