import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ReactPlayer from "react-player";
import fetchThumbnailUrl from "../utils/fetchThumbnailUrl";
import ExternalLink from "../components/ ExternalLink/ExternalLink";

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
      <div className="container_master">
        <div className="site_titulo">
          <h2><strong>Introdução</strong></h2>
        </div>
        <div className="artigo">
          <p>CSS Grid Layout prevê funcionalidades para criação de um sistema de grid bidimensional para layout CSS. Grids que podem usados para "layoutar" tanto as grandes regiões de uma página como os pequenos elementos de uma interface de usuários.</p>
        </div>
        <div className="video_container">
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
        </div>
        <div>
          <ExternalLink 
            href={"https://codepen.io/rachelandrew/"}
            linkText={"codpen"} 
            social_type={"codpen"} 
          />
          <ExternalLink 
            href={"https://speckyboy.com/dev-talks-presentations-future-css/"}
            linkText={"specky"} 
            social_type={"specky"} 
          />
        </div>
        
      </div>
      
    </>
  );
}
