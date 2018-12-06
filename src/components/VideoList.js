import React from "react";
import VideoItem from "./VideoItem";
import { GridList, GridListTile, ListSubheader } from "@material-ui/core";
import "./VideoList.css";

class VideoList extends React.Component {
  render() {
    const { videos, onVideoSelected } = this.props;
    const videoItemList = videos.map(video => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelected={onVideoSelected}
        />
      );
    });
    return (
      <div>
        <GridList cols={1} cellHeight={180} className="gridList">
          <GridListTile style={{ height: 'auto' }}>
            <ListSubheader component="div">Videos</ListSubheader>
          </GridListTile>
          {videoItemList}
        </GridList>
      </div>
    );
  }
}

export default VideoList;
