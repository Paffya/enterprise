import React, {useEffect, useState} from "react";
import axios from "axios";
import "../Styles/Content.css";
import SelectTab from "../Components/SelectTab";
import { useParams } from "react-router-dom";


const ContentCategory = () => {
  const { cat, subcat } = useParams();

  const [advertisementData, setAdvertisementData] = useState([]);

  useEffect(() => {
    const fetchAdvertisementData = async () => {
      try {
        const response = await axios.get('http://192.168.17.8:3000/api/advertisement/get_active');
        setAdvertisementData(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error('Error fetching advertisement data:', error);
      }
    };
  
    fetchAdvertisementData();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts
  

  

  return (
    <div>
      <div className="container container-max">
        <div className="row">

            
          <div className="col-md-12">
            <h1 className="fw-bold py-1 mt-3">{cat.charAt(0).toUpperCase() + cat.slice(1)} {subcat}</h1>
            
          </div>
          <div className="hr"></div>
          </div>
          <SelectTab />

          

          <div className="container container-max ">
        <div className="row mt-5 spaceincontentbottm">
          <div className="col-md-12 mb-2 borderB">
            <div >
            {advertisementData && advertisementData.length > 0 && (
             <a href={`/${advertisementData[2].dest_url}`}> <img
                style={{ width: "100%" }}
                src={`http://192.168.17.8:3000/uploads/promo_img/${advertisementData[2].banner_img}`}
                alt={advertisementData[2].banner_name}
              /> </a>
            )}
            </div>
          </div>
        </div>
      </div>


        

        
      </div>
    </div>
  );
};

export default ContentCategory;
