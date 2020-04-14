import React from "react";

const VideoDetail = ({ videos }) => {
  if (!videos) {
    return <div>Loading</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${videos.id.videoId}`;
  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} title='video player' />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{videos.snippet.title}</h4>
        <p>{videos.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
