import React from 'react';
import SideVideos from './SideVideos';

const ListVideos = ({ videos, onVideoSelect }) => {
    return (
        <>
            {videos.map((video, index) => (
                <SideVideos
                    key={index}
                    onVideoSelect={onVideoSelect}
                    video={video}
                />
            ))}
        </>
    );
}

export default ListVideos;
