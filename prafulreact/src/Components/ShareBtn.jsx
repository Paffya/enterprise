import React from "react";
import {
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const ShareBtn = () => {
  const shareUrl = "kingsresearch.com";
  const imageUrl = 'https://enterprisetalk.com/static/media/enterpriseLogo.0c9f185de2e44cf44932.webp'
  const title = "demo-title";
  const hashtag = "#PriyaCode";

  return (
    <div >
    
      <LinkedinShareButton url={shareUrl} quote={title} hashtag={hashtag} imageUrl={imageUrl}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>

    </div>
  );
};

export default ShareBtn;
