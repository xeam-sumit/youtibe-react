import React from "react"

const VideoItem = (props) => {
  // console.log("videoItem", props)
  return (
    <div onClick={() => { props.onVideoSelect(props.video) }} className="video-item">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <div className="thumbnail">
            <img alt="" src={props.video.snippet.thumbnails.medium.url} />
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="thumb-head">
            <h6>{props.video.snippet.title}</h6>
          </div>
        </div>
      </div>
    </div>
  )

}

export default VideoItem