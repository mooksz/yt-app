import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

//Api Keys
const YOUTUBE_KEY = "AIzaSyD3x2RqzkeAeW9wrsH5ogYSyc9BLvScbyg";

const useVideos = defaultSearchTerm => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

	const search = async term => {
		youtube
			.get("/search", {
				params: {
					part: "snippet",
					maxResults: 5,
					type: "video",
					key: YOUTUBE_KEY,
					q: term,
				},
			})
			.then(res => {
				setVideos(res.data.items);
			})
			.catch(err => {
				console.error(err);
			});
	};

	return [videos, search];
};

export default useVideos;
