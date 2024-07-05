import React, { useMemo } from "react";
import TextHeader from "./TextHeader";

const headerDataLatest = [
  {
    imgURL:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718888711837-New%20data%20begs%20the%20question%20-%20is%20an%20AI%20power%20struggle%20in%20the%20C-suite%20imminent@0.5x.webp",
    desc: "Vyopta Analysis of Hybrid Collaboration Shows Strong Correlation Between Meeting Engagement Metrics and Retention",
    author: "ET Bureau",
    link: "/news/data",
  },
  {
    imgURL:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718796729453-Infrastructure-as-a-Service%20(IaaS)%20What%20You%20Need%20to%20Know@0.5x.webp",
    desc: "New data begs the question - is an AI power struggle in the C-suite imminent?",
    author: "Teshahri",
    link: "/news/data",
  },
  {
    imgURL:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718888711837-New%20data%20begs%20the%20question%20-%20is%20an%20AI%20power%20struggle%20in%20the%20C-suite%20imminent@0.5x.webp",
    desc: "Vyopta Analysis of Hybrid Collaboration Shows Strong Correlation Between Meeting Engagement Metrics and Retention",
    author: "ET Bureau",
    link: "/news/data",
  },
];

const headerDataLeaderShip = [
  {
    imgURL:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718888711837-New%20data%20begs%20the%20question%20-%20is%20an%20AI%20power%20struggle%20in%20the%20C-suite%20imminent@0.5x.webp",
    desc: "Vyopta Analysis of Hybrid Collaboration Shows Strong Correlation Between Meeting Engagement Metrics and Retention",
    author: "ET Bureau",
    link: "/leadership/data",
  },
  {
    imgURL:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718796729453-Infrastructure-as-a-Service%20(IaaS)%20What%20You%20Need%20to%20Know@0.5x.webp",
    desc: "New data begs the question - is an AI power struggle in the C-suite imminent?",
    author: "Teshahri",
    link: "/leadership/data",
  },
  {
    imgURL:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718888711837-New%20data%20begs%20the%20question%20-%20is%20an%20AI%20power%20struggle%20in%20the%20C-suite%20imminent@0.5x.webp",
    desc: "Vyopta Analysis of Hybrid Collaboration Shows Strong Correlation Between Meeting Engagement Metrics and Retention",
    author: "ET Bureau",
    link: "/leadership/data",
  },
];

const headerDataFeatures = [
  {
    imgURL:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718888711837-New%20data%20begs%20the%20question%20-%20is%20an%20AI%20power%20struggle%20in%20the%20C-suite%20imminent@0.5x.webp",
    desc: "Vyopta Analysis of Hybrid Collaboration Shows Strong Correlation Between Meeting Engagement Metrics and Retention",
    author: "ET Bureau",
    link: "/future/data",
  },
  {
    imgURL:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718796729453-Infrastructure-as-a-Service%20(IaaS)%20What%20You%20Need%20to%20Know@0.5x.webp",
    desc: "New data begs the question - is an AI power struggle in the C-suite imminent?",
    author: "Teshahri",
    link: "/future/data",
  },
  {
    imgURL:
      "https://ondot-enterprisetalk.b-cdn.net/uploads/2024/06/1718888711837-New%20data%20begs%20the%20question%20-%20is%20an%20AI%20power%20struggle%20in%20the%20C-suite%20imminent@0.5x.webp",
    desc: "Vyopta Analysis of Hybrid Collaboration Shows Strong Correlation Between Meeting Engagement Metrics and Retention",
    author: "ET Bureau",
    link: "/future/data",
  },
];

const sectionsLatest = [
  { title: "News", link: "/news" },
  { title: "Articles", link: "/articles" },
  { title: "QuickBytes", link: "/quickbytes" },
];

const sectionsLeadership = [
  { title: "Podcasts", link: "/podcasts" },
  { title: "Featured Interview", link: "/featured-interview" },
  { title: "Guest Posts", link: "/guest-posts" },
];

const sectionsFeatures = [
  { title: "Articles", link: "/articles" },
  { title: "Future Ready", link: "/future-ready" },
  { title: "Learning Center", link: "/learning-center" },
];

const DropComp = React.memo(({ section, className, maxItems = 3 }) => {
  const getDataBySection = (section) => {
    switch (section) {
      case "Latest":
        return {
          data: headerDataLatest.slice(0, maxItems),
          sections: sectionsLatest,
          title: "Latest",
        };
      case "Leadership":
        return {
          data: headerDataLeaderShip.slice(0, maxItems),
          sections: sectionsLeadership,
          title: "Leadership",
        };
      case "Features":
        return {
          data: headerDataFeatures.slice(0, maxItems),
          sections: sectionsFeatures,
          title: "Features",
        };
      default:
        return { data: [], sections: [], title: "" };
    }
  };

  const { data, sections } = getDataBySection(section);

  const renderedSections = useMemo(
    () =>
      sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="col-md-4 col-12 section-line">
          <p className="section-title mt-1">{section.title}</p>
          {data.map((x, i) => (
            <React.Fragment key={i}>
              <a
                href={x.link}
                style={{ textDecoration: "none", color: "black" }}
              >
                <TextHeader
                  headerImg={x.imgURL}
                  headerText={x.desc}
                  headerDesc={x.author}
                  headerDescClass="header-desc"
                />
              </a>
              <p className="mt-2 section-line"></p>
            </React.Fragment>
          ))}
          <p className="see-more mt-2 mb-2">
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="/contentcategory"
            >
              See More
            </a>
          </p>
        </div>
      )),
    [data, sections]
  );

  return (
    <div className={`container LatestData ${className}`}>
      <div className="row">{renderedSections}</div>
    </div>
  );
});

export default DropComp;
