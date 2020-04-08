import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyDwV5Sc4VhfXQa2qbN3tigj0KmLU-mVwPw";


class App extends React.Component {
  state = {videos: [], currentVideo: null};

  onVideoSelect = currentVideo => {
    this.setState({currentVideo});
  };

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
        q: term
      }
    });
    this.setState({videos: response.data.items});
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit}/>
        <VideoDetail video={this.state.currentVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
      </div>
    )
  }
}

export default App;