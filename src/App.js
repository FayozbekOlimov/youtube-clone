import React, { useState } from 'react';
import './App.css';
import Search from './Search';
import URL from './URL';
import Video from './Video';
import ListVideos from './ListVideos';

function App() {
	const [videos, setVideos] = useState([]);
	const [selectedVideos, setSelectedVideos] = useState({ id: {}, snippet: {} });

	async function videoSubmit(searchTerm) {
		const { data: { items: videos } } = await URL.get("search", {
			params: {
				part: "snippet",
				maxResults: 6,
				key: "AIzaSyByElSrrd-oWwOi5TeFXMgWIiPNLGDDJpw",
				q: searchTerm
			}
		});

		setVideos(videos);
		setSelectedVideos(videos[0]);
	}

	return (
		<>
			<div className="navbar">
				<Search 
					onSubmit={videoSubmit}
				/>
			</div>
			<div className="videoMain">
				<div className="videoSection">
					<Video 
						video={selectedVideos}
					/>
				</div>
				<div className="videoLists">
					<ListVideos 
						videos={videos} 
						onVideoSelect={setSelectedVideos} 
					/>
				</div>
			</div>
		</>
	);
}

export default App;
