import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

class VideoPlayer extends React.Component {
  render() {
    const { currentVideo } = this.props;
    if (!currentVideo) {
      return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${currentVideo.id.videoId}`;
    return (
      <Card style={{ with: "400px" }}>
        <CardMedia src="video">
          <iframe title="video player" src={videoSrc} />
        </CardMedia>
        <CardContent>
          <Typography component="h4">
            {currentVideo.snippet.title}
          </Typography>
          <Typography component="p">
            {currentVideo.snippet.description}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default VideoPlayer;
