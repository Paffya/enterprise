import React, { useState } from "react";
import { Tab, Tabs, TabContent } from "react-bootstrap";

import "../Styles/HomePage.css";
import { CardComp } from "./CardComp";
import { DataComp } from "./DataComp";
import TextCard from "../Component/TextCard";

const data = [
  {
    id: 1,
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    alt: "SeconlatestNews1",
  },
  {
    id: 2,
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    alt: "SecondlatestNews2",
  },
  {
    id: 3,
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    alt: "MainlatestNews",
  },
];

const tabVal = [
  {
    id: 1,
    tabHeader:
      "Announced a Blockchain-based Intelligent Interconnected Decision-making System",
    tabDesc:
      "New WiMi Hologram Cloud has announced the development of an intelligent interconnected decision-making system based on Blockchain. This system uses Blockchain to achieve decentralization and security by storing various data and information. Additionally, using smart contracts and intelligent algorithms, the system can automatically execute decisions and make corresponding adjustments.",
  },
  {
    id: 2,
    tabHeader:
      "Privileges Announced a Blockchain-based Intelligent Interconnected Decision-making System",
    tabDesc:
      "New WiMi Hologram Cloud has announced the development of an intelligent interconnected decision-making system based on Blockchain. This system uses Blockchain to achieve decentralization and security by storing various data and information. Additionally, using smart contracts and intelligent algorithms, the system can automatically execute decisions and make corresponding adjustments.",
  },
  {
    id: 3,
    tabHeader:
      "App Privileges Announced a Blockchain-based Intelligent Interconnected Decision-making System",
    tabDesc:
      "New WiMi Hologram Cloud has announced the development of an intelligent interconnected decision-making system based on Blockchain. This system uses Blockchain to achieve decentralization and security by storing various data and information. Additionally, using smart contracts and intelligent algorithms, the system can automatically execute decisions and make corresponding adjustments.",
  },
  {
    id: 4,
    tabHeader:
      "Popular Privileges Announced a Blockchain-based Intelligent Interconnected Decision-making System",
    tabDesc:
      "New WiMi Hologram Cloud has announced the development of an intelligent interconnected decision-making system based on Blockchain. This system uses Blockchain to achieve decentralization and security by storing various data and information. Additionally, using smart contracts and intelligent algorithms, the system can automatically execute decisions and make corresponding adjustments.",
  },
];

const Homepage = () => {
  const [activeKey, setActiveKey] = useState("tab1");
  const [lazyLoadImages, setLazyLoadImages] = useState(false);

  const handleTabSelect = (key) => {
    setActiveKey(key);
  };

  const handleLazyLoadImages = () => {
    setLazyLoadImages(true);
  };

  return (
    <div className="container container-max mt-3 main-page">
      <div className="row">
        <h1 className="fw-bold borderB py-1 h5">Latest</h1>
        <div className="col-md-9 col-12 container borderR">
          <DataComp src={data[0].src} alt={data[0].alt} loading="lazy" />
          <div className="mainSecondBox mt-3">
            <div className="row">
              {data.slice(1).map((item, index) => (
                <div key={item.id} className="col-md-6">
                  <DataComp
                    src={item.src}
                    alt={item.alt}
                    loading={lazyLoadImages ? "lazy" : undefined}
                    onLoad={
                      index === data.length - 2 ? handleLazyLoadImages : null
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12">
          <Tabs
            activeKey={activeKey}
            onSelect={handleTabSelect}
            id="tabs-example"
            className="tabBtn nav-link1 colrtab"
          >
            {["Latest", "Popular"].map((tab, index) => (
              <Tab
                key={`tab-${index}`}
                eventKey={`tab${index + 1}`}
                title={tab}
                className="text-black"
              >
                <TabContent className="marTop">
                  <div className="paddings">
                    {tabVal.map((x) => (
                      <a key={x.id} href="/news/data" className="a-tag">
                        <TextCard title={x.tabHeader} desc={x.tabDesc} />
                      </a>
                    ))}
                  </div>
                </TabContent>
              </Tab>
            ))}
          </Tabs>

          <div
            className="marTop heightAuto"
            style={{ textAlign: "center", height: "400px" }}
          >
            <CardComp
              src="https://ondot-enterprisetalk.b-cdn.net/uploads/pixel_img/talk_fintek_2.jpg?width=600"
              alt="fintech"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
