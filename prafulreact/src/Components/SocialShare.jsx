import React from 'react';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, PinterestIcon, PinterestShareButton, TwitterIcon, TwitterShareButton } from 'react-share';

function SocialShare({ title, url, img }) {
  return (
    <div style={{gap:"5px", display:"flex"}}>
      <FacebookShareButton url={url} quote={title}  >
        <FacebookIcon size={27} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title}  >
        <TwitterIcon size={27} />
      </TwitterShareButton>

      <LinkedinShareButton  url={url} title={title}  >
        <LinkedinIcon size={27} />
      </LinkedinShareButton>

      <PinterestShareButton url={url} media={img} description={title}>
        <PinterestIcon size={27} />
      </PinterestShareButton>



    </div>
  );
}

export default SocialShare;