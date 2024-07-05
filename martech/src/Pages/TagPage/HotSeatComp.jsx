import React from "react";
import { CardComp } from "../CardComp";
import TextCard from "../../Component/TextCard";
import "../../Styles/TagPage/HotSeatComp.css"; 

const HotSeatComp = () => {
  const initialData = [
    {
      id: 1,
      name: "Actian Launches Zen 16.0, the Newest Version of its Embedded Database",
      dateData: "12 jan 2024",
      description:
        "Analytics can empower all employees to make faster, more insightful, and confident decisions. Trevor Schulze, the CIO at Alteryx, a provider of AI enterprise analytics, focuses on",
      imgage:
        "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718624208433-Trevor%20Schulze.webp?width=500",
    },
    {
      id: 2,
      name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
      dateData: "12 jan 2024",
      description:
        "Analytics can empower all employees to make faster, more insightful, and confident decisions. Trevor Schulze, the CIO at Alteryx, a provider of AI enterprise analytics, focuses on",
      imgage:
        "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718624208433-Trevor%20Schulze.webp?width=500",
    },
    {
      id: 3,
      name: "KKNewctian Launches Zen 16.0, the Newest Version of its Embedded Database",
      dateData: "12 jan 2024",
      description:
        "Analytics can empower all employees to make faster, more insightful, and confident decisions. Trevor Schulze, the CIO at Alteryx, a provider of AI enterprise analytics, focuses on",
      imgage:
        "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718624208433-Trevor%20Schulze.webp?width=500",
    },
    {
      id: 4,
      name: "PPPPNewctian Launches Zen 16.0, the Newest Version of its Embedded Database",
      dateData: "12 jan 2024",
      description:
        "Analytics can empower all employees to make faster, more insightful, and confident decisions. Trevor Schulze, the CIO at Alteryx, a provider of AI enterprise analytics, focuses on",
      imgage:
        "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718624208433-Trevor%20Schulze.webp?width=500",
    },
  ];

  return (
    <div className="container mt-5 container-max">
      <div className="row">
        <h5 className="fw-bold borderB py-1 h4">Hot Seats</h5>
        <div className="mainSecondBox mt-3">
          <div className="row">
            {initialData.map((item) => (
              <div key={item.id} className="col-md-6 mb-3">
                <div className="article-item d-flex align-items-center gap-3">
                  <div className="image-container">
                    <CardComp src={item?.imgage} alt="Hot Seats Article" />
                  </div>
                  <div className="text-container mt-2">
                    <TextCard title={item.name} desc={item.description} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotSeatComp;
