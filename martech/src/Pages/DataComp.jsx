import React from "react";

export function DataComp({ src, alt ,ee}) {
  return (
    <div className={ee}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop:"15px"
      }}
    >
      <img
        src={src}
        className="homeImg"
        alt="Home Img"
        width="640"
        height="360"
        loading="lazy"
      />
      <div >
        <h2 className="fw-bold h4 mt-3 hoverHead line-clamp">
          Cognite Launches Cognite Atlas AI™, a Set of Utilities that Enables
          Low-code Development of AI Agents
        </h2>
        <p style={{ fontSize: "13px" }}>
          By <span className="fw-bold">ET Bureau</span> | Jan 14, 2024
        </p>
        <p className="just-text line-clamp mt-1" style={{ fontSize: "13px" }}>
          Cognite launches Cognite Atlas AI&amp;trade;, a set of utilities that
          act as an industrial agent and extends Cognite's industrial DataOps
          platform, Cognite Data Fusion&amp;reg;. Cognite Atlas AI results from
          Cognite's extensive, innovative, generative AI and industrial DataOps
          capabilities. It includes a low-code industrial agent generator that
          enables industrial organizations to
        </p>
      </div>
    </div>
  );
}
