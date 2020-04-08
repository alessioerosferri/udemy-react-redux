import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

const KEY = "AIzaSyDwV5Sc4VhfXQa2qbN3tigj0KmLU-mVwPw";


class App extends React.Component {
  state = {videos: []};
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
        I have {this.state.videos.length} videos
      </div>
    )
  }
}

export default App;