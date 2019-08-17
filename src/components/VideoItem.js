import React from 'react';
import PropTypes from 'prop-types';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => (
  <div
    onClick={() => onVideoSelect(video)}
    onKeyDown={onVideoSelect}
    role="button"
    tabIndex="0"
    className="video-item item"
  >
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

VideoItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func,
};

export default VideoItem;
