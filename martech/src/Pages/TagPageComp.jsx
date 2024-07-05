import React,{useRef,useState,useEffect} from "react";
import { DataComp } from "./DataComp";
import dummy from "../Images/pppppp.webp";

import TextCard from "../Component/TextCard";
import { CardComp } from "./CardComp";
import PodcastComp from "./PodcastComp";

import LearningComp from "./TagPage/LearningComp";
import HotSeatComp from "./TagPage/HotSeatComp";
import FutureReadyComp from "./TagPage/FutureReadyComp";
import { ArticleComp } from "./TagPage/ArticleComp";
import "../../src/Styles/TagPage/Category.css"

const initialData = [
  {
    id: 1,
    name: "Omega trial versionActian Launches Zen 16.0, the Newest Version of its Embedded Database",
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
    name: "Welltian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
  {
    id: 4,
    name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
  {
    id: 5,
    name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
  {
    id: 6,
    name: "Action Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
  {
    id: 7,
    name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
    src: "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718889469645-Vyopta%20Analysis%20of%20Hybrid%20Collaboration%20Shows%20Strong%20Correlation%20Between%20Meeting%20Engagement%20Metrics%20@0.5x.webp?width=500",
    dateData: "12 jan 2024",
  },
];


function TagPageComp() {
  const [open, setOpen] = useState(false);
  const [showSection1, setShowSection1] = useState(false); 

  useEffect(() => {

    const isSection1DataPresent = true; 
    setShowSection1(isSection1DataPresent);
  }, []);

  
  //eslint-disable-next-line
  const [show, setShow] = useState(false);

  const [sidenavWidth, setSidenavWidth] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 500) {
        setShow(true);
      }
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
    handleScroll();
  }, []);

  const News = useRef();
  const Article = useRef();
  const QuickBytes = useRef();
  const Podcasts = useRef();
  const HotSeats = useRef();
  const FutureReady = useRef();
  const GuestAuthor = useRef();
  const LearningCenter = useRef();

  
  const scrollHandler = (elemRef) => {
    if (elemRef.current) {
      const extraSpacing = 90; // Adjust this value as needed
      window.scrollTo({
        top: elemRef.current.offsetTop - extraSpacing,
        behavior: "smooth",
      });
    } else {
      alert("Nohing is there!!!...");
    }
  };

  const closeNav = () => {
    setSidenavWidth(0);
  };
  //eslint-disable-next-line
  const handleToggleSidenav = () => {
    const newWidth = show ? 0 : 125;
    setSidenavWidth(newWidth);
    setShow(!show);
  };

  const scrollHandlerNews = (elemRef) => {
    if (elemRef.current) {
      const extraSpacing = 130; 
      window.scrollTo({
        top: elemRef.current.offsetTop - extraSpacing,
        behavior: "smooth",
      });
    }
  };


  useEffect(() => {
    const handleOutsideClick = (event) => {
      const sidenav = document.getElementById("mySidenav");
      const main = document.getElementById("main");

      if (
        sidenav &&
        main &&
        !sidenav.contains(event.target) &&
        !main.contains(event.target)
      ) {
        closeNav();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleToggle = () => {
    const newWidth = open ? 0 : 120;
    setSidenavWidth(newWidth);
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const sidenav = document.getElementById("mySidenav");
      const main = document.getElementById("main");

      if (
        sidenav &&
        main &&
        !sidenav.contains(event.target) &&
        !main.contains(event.target)
      ) {
        closeNav();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <>

    <div className="open-data">
    {open && (
      <header>
        <ul
          id="mySidenav"
          className="sidenav DesktopResponsive"
          style={{ height: `${sidenavWidth}px` }}
        >
          {showSection1 && (
            <li onClick={() => scrollHandlerNews(News)}>News</li>
          )}
          {showSection1 && (
            <li onClick={() => scrollHandler(Article)}>Article</li>
          )}
          {showSection1 && (
            <li onClick={() => scrollHandler(QuickBytes)}>Quick Bytes</li>
          )}

          <li onClick={() => scrollHandler(FutureReady)}>Future Ready</li>

          <li onClick={() => scrollHandler(Podcasts)}>Podcasts</li>
          <li onClick={() => scrollHandler(HotSeats)}>Hot Seats</li>

          <li onClick={() => scrollHandler(GuestAuthor)}>Guest Authors</li>
          <li onClick={() => scrollHandler(LearningCenter)}>
            Learning Center
          </li>
        </ul>
      </header>
    )}
  </div>
  <div
    id="main"
    className="DesktopResponsive "
    style={{
      textAlign: "end",
      marginTop: "-30px",
      position: "fixed",
      left: "98%",
      top: "300px",
    }}
  >
    <span
      onClick={handleToggle}
      style={{
        cursor: "pointer",
        writingMode: "vertical-rl",
        transform: "rotateZ(180deg)",
      }}
      className="verticalCat"
    >
      Category
    </span>
  </div>



  <div ref={News}></div>
      <div className="container container-max">
      <h1 className="fw-bold py-1 mt-2 h1">Articles</h1>
        <ArticleComp />
      </div>
      <div ref={Article}></div>
      <div className="container mt-5">
        <div className="row">
          <h3 className="fw-bold borderB py-1 h4">Articles</h3>

          <div
            className="col-md-3 col-12"
            style={{ borderRight: "1px solid #eaeaea" }}
          >
            <>
              {initialData.map((item) => (
                <>
                  <TextCard title={item.name} />
                </>
              ))}
            </>
          </div>
          <div className=" col-md-9 col-12">
            <DataComp src={dummy} alt="tag-data" />
          </div>
        </div>
      </div>

       <div ref={QuickBytes}></div>
      <div className="container mt-5">
        <div className="row">
          <h3 className="fw-bold borderB py-1 h4">Quick Bytes</h3>

          <div className="col-md-8 col-12">
            {initialData?.map((item, index) => (
              <div
                key={item.id}
                className="d-flex justify-content-evenly container"
              >
                <div className="row">
                  <div className="col-md-3 col-12 mt-3">
                    <CardComp src={item.src} alt={item.alt} />
                  </div>
                  <div className="col-md-9 col-12 mt-3">
                    <TextCard title={item.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4 col-12">
            <CardComp src="https://ondot-enterprisetalk.b-cdn.net/uploads/pixel_img/talk_fintek_1.jpg?width=300" alt="Quick bytes" />
          </div>
        </div>
      </div>

      
       <div ref={Podcasts}></div>
      <div className="mt-5">
        <PodcastComp order={false}/>
      </div>


      <div ref={HotSeats}></div>
      <div className="mt-5">
        <HotSeatComp />
      </div>


      <div ref={FutureReady}></div>
      <div className="mt-5">
        <FutureReadyComp />
      </div>


      
      <div ref={GuestAuthor}></div>
      <div className="mt-5">
     
     
      <PodcastComp order={true}/>
      </div>



      
      <div ref={LearningCenter}></div>
      <div classname="mt-5">
        <LearningComp />
      </div>
    </>
  );
}

export default TagPageComp;
