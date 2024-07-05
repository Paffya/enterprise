import React from "react";
import dummy from "../Images/pppppp.webp";
import "../Pages/DataComp";
import { DataComp } from "../Pages/DataComp";
import TextCard from "../Component/TextCard";

const initialData = [
  {
    id: 1,
    name: "Actian Launches Zen 16.0, the Newest Version of its Embedded Database",
    dateData: "12 jan 2024",
  },
  {
    id: 2,
    name: "Newctian Launches Zen 16.0, the Newest Version of its Embedded Database",
    dateData: "12 jan 2024",
  },
  {
    id: 3,
    name: "Actian Launches Zen 16.0, the Newest Version of its Embedded Database",
    dateData: "12 jan 2024",
  },
  {
    id: 4,
    name: "Actian Launches Zen 16.0, the Newest Version of its Embedded Database",
    dateData: "12 jan 2024",
  },
];

export function QuickComp() {
  return (
    <>
      <div className="container mt-5 container-max">
        <div className="row">
          <h3 className="fw-bold borderB py-1 h4">Quick Bytes</h3>
          <div
            className="col-md-4 col-12 mt-3"
            style={{ borderRight: "1px solid #eaeaea" }}
          >
            {initialData.map((item) => (
              <div key={item.id}>
                <TextCard title={item.name} />
              </div>
            ))}
          </div>
          <div className="col-md-8 col-12 d-flex custom-space-between">
            <DataComp src={dummy} alt="quick1" />
            <DataComp src={dummy} alt="quick2" />
          </div>
        </div>
      </div>

      <div className="container mt-5 spaceincontent container-max">
        <div className="row">
          <h3 className="fw-bold borderB py-1 h4">Articles</h3>
          <div className="col-md-8 col-12 d-flex custom-space-between">
            <DataComp src={dummy} alt="quick1" />
            <DataComp src={dummy} alt="quick2" />
          </div>
          <div
            className="col-md-4 col-12 mt-3"
            style={{ borderLeft: "1px solid #eaeaea" }}
          >
            {initialData.map((item) => (
              <div key={item.id}>
                <TextCard title={item.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
