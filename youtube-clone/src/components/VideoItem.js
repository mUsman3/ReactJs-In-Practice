import React from "react";
import "./VideoItem.css";

const VideoItem = props => {
  return (
    <div
      onClick={() => props.onVideoSelect(props.videos)}
      className='video-item item'
    >
      <img
        className='ui image'
        src={props.videos.snippet.thumbnails.medium.url}
        alt='Image'
      />
      <div className='content'>
        <div className='header'>{props.videos.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
