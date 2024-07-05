import React from "react";

function TextHeader({ headerImg, headerText, headerDesc ,headerDescClass}) {
    

   
  return (
    <div className="text-card gap-3">

    
      <img
        src={headerImg}
        alt="latest"
        loading="lazy"
        className="headerImg"
        width="120"
        height="80"
      />
      <div className="main-text">
        <h5 className="headerText fw-bold line-clamp">{headerText}</h5>
        <p className={`header-desc ${headerDescClass}`}>
          BY <span className="fw-bold">{headerDesc}</span> | Jun 2024
        </p>
      </div>
    </div>
  );
}

export default TextHeader;
