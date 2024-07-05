import React from "react";

function TextCard({ title, desc }) {
  return (
    <>
      <h2 className="fw-bold h5 hoverHead line-clamp mt-3">{title}</h2>

      <p className="mt-1" style={{ fontSize: "13px" }}>
        By <span className="fw-bold">ET Bureau</span> | Jun 18, 2024
      </p>
      <p className="just-text line-clamp  mt-1" style={{ fontSize: "15px" }}>
        {desc}
      </p>
     
    </>
  );
}

export default TextCard;
