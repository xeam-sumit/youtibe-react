import React from "react";
import SearchBar from "./SearchBar"
import youtube from "../Api/youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"
class App extends React.Component {
  state = { videos: [], selectedVideo: null }
  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      }
    });
    this.setState({ videos: response.data.items })
  }
  onVideoSelect = (video) => {
    console.log("from the app", video)
    this.setState({ selectedVideo: video })
  }
  render() {
    return (
      <div className="container-fluid">
        <SearchBar onSubmitted={this.onSearchSubmit} />
        <div className="col-md-10 offset-md-1">
          <div className="row">
            <div className="col-md-6">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="col-md-6">
              <VideoList onVideoSelect={this.onVideoSelect} videoData={this.state.videos}></VideoList>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App 