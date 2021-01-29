import React from "react";
import VideoItem from "./VideoItem"

const VideoList = (props) => {
  // console.log("VideoList", props)
  let renderedList = props.videoData.map((video) => {
    return <VideoItem onVideoSelect={props.onVideoSelect} video={video} />
  });
  return (
    <div className="container-fluid">
      {renderedList}
    </div>
  )
}

export default VideoList