import React, { useState,useMemo } from "react";
import TextCard from "../Component/TextCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import dummy from "../Images/pppppp.webp";
import "../Styles/Topic.css";
import SocialShare from "../Component/SocialShare";
import shareIcon from "../Images/shareIcon.webp";
import { CardComp } from "./CardComp";

const Topic = () => {
    const initialData = useMemo(() => [
        {
          id: 1,
          name: "Omega trial versionActian Launches Zen 16.0, the Newest Version of its Embedded Database",
          src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
          dateData: "12 jan 2024",
          desc: "New WiMi Hologram Cloud has announced the development of an intelligent interconnected decision-making system based on Blockchain. This system uses Blockchain to achieve decentralization and security by storing various data and information. Additionally, using smart contracts and intelligent algorithms, the system can automatically execute decisions and make corresponding adjustments.",
        },
        {
          id: 2,
          name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
          src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
          dateData: "12 jan 2024",
          desc: "New WiMi Hologram Cloud has announced the development of an intelligent interconnected decision-making system based on Blockchain. This system uses Blockchain to achieve decentralization and security by storing various data and information. Additionally, using smart contracts and intelligent algorithms, the system can automatically execute decisions and make corresponding adjustments.",
        },
        {
          id: 3,
          name: "Welltian Launches Zen 16.0, the Newest Version of its Embedded Database",
          src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
          dateData: "12 jan 2024",
          desc: "New WiMi Hologram Cloud has announced the development of an intelligent interconnected decision-making system based on Blockchain. This system uses Blockchain to achieve decentralization and security by storing various data and information. Additionally, using smart contracts and intelligent algorithms, the system can automatically execute decisions and make corresponding adjustments.",
        },
        {
          id: 4,
          name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
          src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
          dateData: "12 jan 2024",
          desc: "New WiMi Hologram Cloud has announced the development of an intelligent interconnected decision-making system based on Blockchain. This system uses Blockchain to achieve decentralization and security by storing various data and information. Additionally, using smart contracts and intelligent algorithms, the system can automatically execute decisions and make corresponding adjustments.",
        },
      ], []);
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleHeaderClick = () => {
    setAccordionOpen(!accordionOpen);
  };

  return (
    <div className="container mb-5 container-max">
      <div className="row">
        <div className="col-md-9 borderR">
          <div className="paddings ">
            <h1 className="fw-bold mt-1 h2 ">
              Learnosity Unveils Groundbreaking AI Initiative in Education
              Technology
            </h1>

            <div
              style={{ lineHeight: "2" }}
              className="d-flex justify-content-between"
            >
              <div>
                <p style={{ fontSize: "14px" }}>By ET Bureau | Jun 3, 2024</p>
              </div>
              <div className="d-flex gap-1">
                <button className="share-btn mb-1">
                  <img
                    src={shareIcon}
                    alt="share"
                    width="30"
                    height="30"
                    style={{ width: "23px",height:"auto", padding: "1px" }}
                  />
                </button>
                <SocialShare />
                <div className="share-button-container instabtn">
                  <button
                    className="instaBackColor "
                    style={{ border: "none", height: "27px" }}
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{
                        fontSize: "17px",
                        color: "#fff",
                        marginBottom: "2px",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <img className="topicImg" src={dummy} alt="dummy" width="150" height="100" loading="lazy"/>
            </div>

            <div
              className="contentTableBox mb-4 mt-4"
              onClick={handleHeaderClick}
            >
              <h2 className="fw-bold px-1 h4 clippath">
                <div className="d-flex justify-content-between ">
                  <div className="mb-1 h5 fw-bold" style={{ cursor: "pointer" }}>
                    Table of Contents
                  </div>{" "}
                  <div style={{ cursor: "pointer" }} className="px-2">
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                </div>
              </h2>
              <React.Fragment>
                {accordionOpen && (
                  <ol className="px-3">
                    <li className="tocBack ">
                      <a
                        href="/"
                        className="text-black mb-1 backLine hover-underline-animations text-decoration-none"
                      >
                        Omega trial versionActian Launches Zen 16.0, the Newest
                      </a>
                      <a
                        href="/"
                        className="text-black mb-1 backLine hover-underline-animations text-decoration-none"
                      >
                        Omega trial versionActian Launches Zen 16.0, the Newest
                      </a>
                      <a
                        href="/"
                        className="text-black mb-1 backLine hover-underline-animations text-decoration-none"
                      >
                        Omega trial versionActian Launches Zen 16.0, the Newest
                      </a>
                    </li>
                  </ol>
                )}
              </React.Fragment>
            </div>

            <div className="content mt-2">
              <h3 className="fw-bold h3">
                Learnosity Unveils Groundbreaking AI Initiative in Education
                Technology
              </h3>
              <p className="p">
                More workers are planning to change jobs currently than during
                the ‘Great Resignation’ period of 2022, according to a PwC
                survey of the global workforce.
              </p>
              <p className="p">
                28 per cent of the 56,000 workers surveyed claimed they were
                ‘very or extremely likely’ to move from their current companies
                in comparison to 26 per cent in 2023 and 19 per cent in 2022.
              </p>
              <p className="p">
                PwC’s 2024 Hopes and Fears report found that increased workloads
                were driving employees to adopt technologies such as Generative
                AI to cope.
              </p>

              <p className="p">
                More workers are planning to change jobs currently than during
                the ‘Great Resignation’ period of 2022, according to a PwC
                survey of the global workforce.
              </p>
              <p className="p">
                28 per cent of the 56,000 workers surveyed claimed they were
                ‘very or extremely likely’ to move from their current companies
                in comparison to 26 per cent in 2023 and 19 per cent in 2022.
              </p>
              <p className="p">
                PwC’s 2024 Hopes and Fears report found that increased workloads
                were driving employees to adopt technologies such as Generative
                AI to cope.
              </p>
              <h3 className="fw-bold h4">
                Learnosity Unveils Groundbreaking AI Initiative in Education
                Technology
              </h3>
              <p className="p">
                “Culture is extremely important as a differentiator in the
                employment market, and a workforce overwhelmed by growing
                workloads will only have an adverse impact on retention. PwC’s
                survey highlights an appetite for Generative AI as an enabler to
                streamline and improve the quality of work, but businesses can
                take a wider view of technology enablement through increased
                investment in tech and skills. Employee experience can have a
                huge impact on the success of a business and without excellent
                employee experience, a company can not deliver excellent
                customer experience.”
              </p>
              <p className="p">
                28 per cent of the 56,000 workers surveyed claimed they were
                ‘very or extremely likely’ to move from their current companies
                in comparison to 26 per cent in 2023 and 19 per cent in 2022.
              </p>
              <p className="p">
                PwC’s 2024 Hopes and Fears report found that increased workloads
                were driving employees to adopt technologies such as Generative
                AI to cope.
              </p>

              <p className="p">
                More workers are planning to change jobs currently than during
                the ‘Great Resignation’ period of 2022, according to a PwC
                survey of the global workforce.
              </p>
              <p className="p">
                28 per cent of the 56,000 workers surveyed claimed they were
                ‘very or extremely likely’ to move from their current companies
                in comparison to 26 per cent in 2023 and 19 per cent in 2022.
              </p>
              <p className="p">
                PwC’s 2024 Hopes and Fears report found that increased workloads
                were driving employees to adopt technologies such as Generative
                AI to cope.
              </p>

              <p className="p">
                More workers are planning to change jobs currently than during
                the ‘Great Resignation’ period of 2022, according to a PwC
                survey of the global workforce.
              </p>
              <p className="p">
                28 per cent of the 56,000 workers surveyed claimed they were
                ‘very or extremely likely’ to move from their current companies
                in comparison to 26 per cent in 2023 and 19 per cent in 2022.
              </p>
              <p className="p">
                PwC’s 2024 Hopes and Fears report found that increased workloads
                were driving employees to adopt technologies such as Generative
                AI to cope.
              </p>
            </div>

            <div
              className="ArticleBox mt-5 mb-5"
              style={{ alignItems: "center" }}
            >
              <>
                <div>
                  <img
                    className="ArticleImg"
                    src="https://ondot-enterprisetalk.b-cdn.net/uploads/author-profiles/Author-Image.jpg?width=300"
                    alt="img"
                    width="150"
                    height="80"
                    loading="lazy"
                  />
                </div>
                <div style={{ fontSize: "14px", padding: "10px" }}>
                  <h2 className="fw-bold h6">lorem epsum</h2>
                  <p>
                    A Peer Knowledge resources - By the CXO, For the CXO. Expert
                    inputs on challenges, triumphs and innovative solution from
                    corporate Movers and Shakers in the global Leadership space
                    to add value to Business decision making.
                  </p>
                </div>
              </>
            </div>
          </div>

          <div className=" mt-5">
            <h3 className="fw-bold borderB py-1 h4">More from Talk CMO</h3>

            {initialData?.map((item, index) => (
              <div
                key={item.id}
                className="d-flex justify-content-evenly container gap-4"
              >
                <div className="row">
                  <div className="col-md-3 col-12 mt-3">
                    <CardComp src={item.src} alt="content-card" />
                  </div>
                  <div className="col-md-9 col-12 mt-3">
                    <TextCard title={item.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-3 mobiletop">
          <div className=" borderB paddings">
            <h5 className="fw-bold">Related Articles</h5>
          </div>
          <div>
            {initialData.map((x, i) => (
              <React.Fragment key={i}>
                <div className="d-flex">
                  <div>
                    <TextCard title={x.name} desc={x.desc} />
                  </div>
                  <div style={{ display: "flex", alignItems: "end" }}>
                    <span className="numb">{i + 1}</span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="mt-5">
            <CardComp
              src="https://ondot-enterprisetalk.b-cdn.net/uploads/pixel_img/talk_fintek_1.jpg?width=300"
              alt="textimg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
