import React from "react";

export function CardComp({ src, alt }) {
  return (
    <>
      <img
        src={src}
        className="homeImg"
        alt="homeImg"
        width="640"
        height="360"
        loading="lazy"
      />
    </>
  );
}
