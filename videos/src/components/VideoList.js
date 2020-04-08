import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({videos}) => {
  const elements = videos.map((video) => {
    return <VideoItem
      key={video.id.videoId}
      video={video}
    />
  })
  return <div className="ui relaxed divided list">{elements}</div>;
};

export default VideoList;