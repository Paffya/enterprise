import React from 'react';
import facebook from "../Images/facebook-f.png"

import linkedin from "../Images/linkedin.png"

const ShareButtons = ({ shareText, shareUrl }) => {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const pinterestShareUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareText)}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent('Check this out')}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  const openSharePopup = (url) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className=''>
        
      <button className='mx-1 bg-black btn-share' onClick={() => openSharePopup(facebookShareUrl)}>
      <img src={facebook} alt="facebook" style={{width:"14px", padding:"2px"}} />
      </button>

      <button className='mx-1 bg-black btn-share' onClick={() => openSharePopup(pinterestShareUrl)}>
      <img src="https://www.freeiconspng.com/uploads/white-pinterest-logo-png--30.png" alt="facebook" style={{width:"20px", padding:"2px"}} />
      </button>

      <button className='mx-1 bg-black btn-share' onClick={() => openSharePopup(linkedinShareUrl)}>
      <img src={linkedin} alt="linkedin" style={{width:"15px"}} />
      </button>

      <button className='mx-1 bg-black btn-share' onClick={() => openSharePopup(twitterShareUrl)}>
      <img src="https://assets-global.website-files.com/5d66bdc65e51a0d114d15891/64cebe1d31f50e161e4c825a_X-logo-transparent-white-twitter.png" alt="twitter img" style={{width:"20px", padding:"2px"}} />
      </button>


    </div>
  );
};

// Example usage
const ShareButton = () => {
  const shareText = 'Check out this link!';
  const shareUrl = window.location.href;

  return (
    <div>
      <ShareButtons shareText={shareText} shareUrl={shareUrl} />
    </div>
  );
};

export default ShareButton;
