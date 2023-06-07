import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ReactPlayer from "react-player";
import fetchThumbnailUrl from "../utils/fetchThumbnailUrl";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const videoId = "N5Lt1SLqBmQ"; // ID do vídeo do YouTube
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    fetchThumbnail();
  }, []);
  
  const fetchThumbnail = async () => {
    try {
      const thumbnailUrl = await fetchThumbnailUrl(videoId, API_KEY);
      setThumbnailUrl(thumbnailUrl);
    } catch (error) {
      console.log("Erro ao buscar o URL do thumbnail:", error);
    }
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <Navbar />
      <h1>Página Home</h1>
      {!isVideoPlaying && (
        <div>
          {thumbnailUrl && (
            <img src={thumbnailUrl} alt="Thumbnail do vídeo" />
          )}
          <button onClick={handleVideoPlay}>Play</button>
        </div>
      )}
      {isVideoPlaying && (
        <ReactPlayer
          className="video"
          url={`https://www.youtube.com/watch?v=${videoId}`}
          playing={true}
          controls
          width="100%"
          height="100%"
        />
      )}
    </>
  );
}
