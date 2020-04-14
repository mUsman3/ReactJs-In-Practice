import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ video, onVideoSelect }) => {
  const renderedList = video.map(videos => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        videos={videos}
      />
    );
  });

  return <div className='ui relaxed divided list'>{renderedList}</div>;
};

export default VideoList;
