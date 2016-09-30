import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = ({ videos, onVideoSelect }) => {

	const videoItems = videos.map((video, i) => {
		return (
			<VideoListItem 
				onVideoSelect={onVideoSelect}
				key={video.etag} 
				video={video} />
		);
	});

	return (
		<ul className="col-md-4 list-group video-list">
			{videoItems}
		</ul>
	);
};

export default VideoList;