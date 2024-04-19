import React, { useEffect, useState } from 'react';
import facebookIcon from "../Images/facebook-f.png";
import linkedinIcon from "../Images/linkedin.png";
import pinterestIcon from "../Images/pinterest.png";
import shareIcon from "../Images/shareIcon.png";

const ShareButtons = ({ shareText, shareUrl, disabled, windowWidth = 600, windowHeight = 400, onShareWindowClose }) => {
  const [pageTitle, setPageTitle] = useState('');
  const [pageDescription, setPageDescription] = useState('');
  const [pageImage, setPageImage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Fetch metadata from og tags
    const metaTags = document.getElementsByTagName('meta');
    for (let i = 0; i < metaTags.length; i++) {
      if (metaTags[i].getAttribute('property') === 'og:title') {
        setPageTitle(metaTags[i].getAttribute('content'));
      }
      if (metaTags[i].getAttribute('property') === 'og:description') {
        setPageDescription(metaTags[i].getAttribute('content'));
      }
      if (metaTags[i].getAttribute('property') === 'og:image') {
        setPageImage(metaTags[i].getAttribute('content'));
      }
    }
  };

  // const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  // const linkedinShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(pageTitle)}`;
  // const pinterestShareUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(pageDescription)}`;
  // const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

  const openSharePopup = (url) => {
    window.open(url, '_blank', `width=${windowWidth},height=${windowHeight}`);
    if (onShareWindowClose) {
      const shareWindow = window.open(url, '_blank', `width=${windowWidth},height=${windowHeight}`);
      const interval = setInterval(() => {
        if (shareWindow.closed) {
          clearInterval(interval);
          onShareWindowClose();
        }
      }, 1000);
    }
  };

  return (
    <div>
      <button className={`mx-1  share-btn ${disabled ? 'disabled' : ''}`} disabled={disabled} onClick={() => openSharePopup(shareUrl)}>
        <img src={shareIcon} alt="share" style={{ width: "25px", padding: "1px" }} />
      </button>

      {/* Share buttons */}


      <button className={`mx-1 bg-black btn-share`} title='Share on Facebook' style={{cursor:"context-menu"}} disabled={disabled}>
        <img src={facebookIcon} alt="facebook" style={{ width: "14px", padding: "2px" }} />
      </button>

      <button className={`mx-1 bg-black btn-share`} title='Share on Pinterest'  style={{cursor:"context-menu"}} disabled={disabled}>
        <img src={pinterestIcon} alt="pinterest" style={{ width: "20px", padding: "2px" }} />
      </button>

      <button className={`mx-1 bg-black btn-share`} title='Share on LinkedIn'  style={{cursor:"context-menu"}} disabled={disabled}>
        <img src={linkedinIcon} alt="linkedin" style={{ width: "15px" }} />
      </button>

      <button className={`mx-1 bg-black btn-share`} title='Share on Twitter'  style={{cursor:"context-menu"}} disabled={disabled}>
        <img src="https://assets-global.website-files.com/5d66bdc65e51a0d114d15891/64cebe1d31f50e161e4c825a_X-logo-transparent-white-twitter.png" alt="twitter img" style={{ width: "20px", padding: "2px" }} />
      </button>


      {/* <button className={`mx-1 bg-black btn-share`} title='Share on Facebook' onClick={() => openSharePopup(facebookShareUrl)} disabled={disabled}>
        <img src={facebookIcon} alt="facebook" style={{ width: "14px", padding: "2px" }} />
      </button>

      <button className={`mx-1 bg-black btn-share`} title='Share on Pinterest' onClick={() => openSharePopup(pinterestShareUrl)} disabled={disabled}>
        <img src={pinterestIcon} alt="pinterest" style={{ width: "20px", padding: "2px" }} />
      </button>

      <button className={`mx-1 bg-black btn-share`} title='Share on LinkedIn' onClick={() => openSharePopup(linkedinShareUrl)} disabled={disabled}>
        <img src={linkedinIcon} alt="linkedin" style={{ width: "15px" }} />
      </button>

      <button className={`mx-1 bg-black btn-share`} title='Share on Twitter' onClick={() => openSharePopup(twitterShareUrl)} disabled={disabled}>
        <img src="https://assets-global.website-files.com/5d66bdc65e51a0d114d15891/64cebe1d31f50e161e4c825a_X-logo-transparent-white-twitter.png" alt="twitter img" style={{ width: "20px", padding: "2px" }} />
      </button> */}
    </div>
  );
};

export default ShareButtons;
