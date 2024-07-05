import React from "react";


import { DataComp } from "../DataComp";
const initialData = [
  {
    id: 1,
    name: "Actian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
  {
    id: 2,
    name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
  {
    id: 3,
    name: "Actian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
 
 
];

export function ArticleComp() {
  return (
    <>
      <div className="container mt-3  container-max">
        <div className="row">
        <h5 className="fw-bold borderB py-1 h4">News</h5>
       
        <div className="mainSecondBox mt-3">
        <div className="row">
          {initialData?.map((item, index) => (
            <div key={item.id} className="col-md-4 col-12">
              <DataComp src={item.src} alt="News Articles" />
            </div>
          ))}
        </div>
      </div>
        </div>
      </div>

    
    </>
  );
}