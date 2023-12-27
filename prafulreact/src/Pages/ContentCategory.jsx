import React from "react";

import "../Styles/Content.css";
import SelectTab from "../Components/SelectTab";
import { useParams } from "react-router-dom";

const ContentCategory = () => {
  const { cat, subcat } = useParams();
  return (
    <div>
      <div className="container container-max">
        <div className="row">

            
          <div className="col-md-12">
            <h1 className="fw-bold py-1 mt-3">{cat.charAt(0).toUpperCase() + cat.slice(1)} {subcat}</h1>
            
          </div>
          <div className="hr"></div>

          <SelectTab />

          

          <div className="container container-max ">
            <div className="row mt-5 ">
              <div className="col-md-12 mb-5 borderB">
                <div
                  style={{ height: "150px"}}
                ><img style={{width:"100%"}} src="https://enterprisetalk.com/wp-content/uploads/2023/11/BlackNP-1.png" alt="" /></div>
              </div>
            </div>
          </div>


        </div>

        
      </div>
    </div>
  );
};

export default ContentCategory;
