import React from 'react';

const SideVideos = ({ video, onVideoSelect }) => {
    return (
        <div className="videoItems" onClick={() => onVideoSelect(video)}>
            <img
                src={video.snippet.thumbnails.medium.url}
                alt="overlay"
            />
            <p className="titleVideo">
                {video.snippet.title}
            </p>
        </div>
    );
}

export default SideVideos;
