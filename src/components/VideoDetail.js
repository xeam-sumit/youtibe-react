import React from "react";

const VideoDetail = ({ video }) => {
  console.log("VideoDetail", video)

  if (video) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
      <div className="mb-3">
        <div className="video-player border">
          <iframe src={videoSrc}>
          </iframe>
        </div>
        <div className="border text-left p-2 rounded">
          <h6 className="fw-bold">{video.snippet.title}</h6>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    )
  }
  else {
    return (
      <div>
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }
}
export default VideoDetail