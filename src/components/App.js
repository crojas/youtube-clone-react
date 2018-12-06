import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import youtube from "./api/youtube";

class App extends React.Component {
  state = { videos: [], currentVideo: null };

  componentDidMount() {
    this.onFormSubmit("continuous integration");
  }

  onFormSubmit = async searchText => {
    const response = await youtube.get("/search", {
      params: {
        q: searchText
      }
    });
    console.log(response);
    this.setState({
      videos: response.data.items,
      currentVideo: response.data.items[0]
    });
  };

  onVideoSelected = video => {
    this.setState({ currentVideo: video });
  };

  render() {
    console.log(this.state.currentVideo);
    return (
      <div>
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <VideoPlayer currentVideo={this.state.currentVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelected={this.onVideoSelected}
        />
      </div>
    );
  }
}

export default App;
