import React from "react";
import { GridListTile } from "@material-ui/core";
import { GridListTileBar } from "@material-ui/core";

class VideoItem extends React.Component {
  render() {
    const { video, onVideoSelected } = this.props;
    return (
      <GridListTile key={video.title} onClick={() => onVideoSelected(video)}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <GridListTileBar
          title={video.snippet.title}
          subtitle={video.snippet.channelTitle}
        />
      </GridListTile>
    );
  }
}

export default VideoItem;
