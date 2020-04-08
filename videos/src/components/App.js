import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

const KEY = "AIzaSyDwV5Sc4VhfXQa2qbN3tigj0KmLU-mVwPw";


class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get("/search", {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
        q: term
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onTermSubmit}/>
      </div>
    )
  }
}

export default App;