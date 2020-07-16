import React from "react";

//Components
import VideoItem from "./VideoItem";

const VideoList = props => {
	const { videos, onVideoSelect } = props;

	const videoList = videos.map(video => {
		return (
			<VideoItem
				key={video.id.videoId}
				onVideoSelect={onVideoSelect}
				video={video}
			/>
		);
	});

	return <div className="ui relaxed divided list video-list">{videoList}</div>;
};

export default VideoList;
