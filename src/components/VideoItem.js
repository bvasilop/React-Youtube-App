/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => (
  <div onClick={() => onVideoSelect(video)} className="video-item item">
    <img
      className="ui image"
      alt={video.snippet.title}
      src={video.snippet.thumbnails.medium.url}
    />
    <div className="content">
      <div className="header">{video.snippet.title}</div>
    </div>
  </div>
);

export default VideoItem;
