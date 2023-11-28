import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

function AudioPlayer({ audioSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  function formatDuration(durationSeconds) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return `${minutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    
  }, []);

  return (
    <div className="player-card">
      <img className="audioImg" src="https://preview.redd.it/on-the-armchair-expert-podcast-v0-y585l9tcw5ma1.jpg?width=640&crop=smart&auto=webp&s=b049546d06800a129fc0fb4db61850f8bf6536a6" alt="" />

      <input
        type="range"
        min="0"
        max={!isNaN(duration) ? duration : 0}
        value={currentTime}
        onChange={handleSeek}
        className="audioWid"
      />

      <audio ref={audioRef} src={audioSrc} />

      <div className="track-duration">
        <p>{formatDuration(currentTime)}</p>
        <p>{formatDuration(duration)}</p>
      </div>

      <button className="audioBtn" onClick={handlePlayPause}>
        <FontAwesomeIcon size="2xs" icon={isPlaying ? faPause : faPlay} />
      </button>
    </div>
  );
}

export default AudioPlayer;
