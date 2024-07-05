import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

function SocialShare({ title, url, img }) {
  return (
    <div style={{ gap: "5px", display: "flex" }}>
      <div className="share-button-container">
        <FacebookShareButton  aria-label="Facebook" url={url} quote={title}>
          <FacebookIcon size={27} />
        </FacebookShareButton>
        {/* <span className="tooltip">Share on Facebook</span> */}
      </div>

      <div className="share-button-container">
        <TwitterShareButton aria-label="Twitter" url={url} title={title}>
          <TwitterIcon size={27} />
        </TwitterShareButton>
        {/* <span className="tooltip">Share on Twitter</span> */}
      </div>

      <div className="share-button-container">
        <LinkedinShareButton aria-label="Linkedin" url={url} title={title} image={img}>
          <LinkedinIcon size={27} />
        </LinkedinShareButton>
        {/* <span className="tooltip">Share on LinkedIn</span> */}
      </div>
    </div>
  );
}

export default SocialShare;
