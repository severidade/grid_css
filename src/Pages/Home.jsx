import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar/Navbar";
import ReactPlayer from "react-player";
import fetchThumbnailUrl from "../utils/fetchThumbnailUrl";
import ExternalLink from "../components/ ExternalLink/ExternalLink";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const videoId = "N5Lt1SLqBmQ"; // ID do vídeo do YouTube
  // const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const API_KEY ="AIzaSyC4MuHcSfkMK4qevP9Gr6PgsxxmMXViuow";

  const fetchThumbnail = useCallback(async () => {
    try {
      const thumbnailUrl = await fetchThumbnailUrl(videoId, API_KEY);
      setThumbnailUrl(thumbnailUrl);
    } catch (error) {
      console.log("Erro ao buscar o URL do thumbnail:", error);
    }
  }, [videoId, API_KEY]);
  
  useEffect(() => {
    fetchThumbnail();
  }, [fetchThumbnail]);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <>
      <Navbar />
      <div className="container_master">
        <div className="container_title">
          <h2><strong>Introdução</strong></h2>
        </div>
        <article className="container_article">
          <p>CSS Grid Layout prevê funcionalidades para criação de um sistema de grid bidimensional para layout CSS. Os Grids podem usados para organizar os layouts tanto de grandes regiões de uma página como os pequenos elementos de uma interface de usuários.</p>
          <p>Quando assisti à palestra de 
              <ExternalLink 
                href={"https://rachelandrew.co.uk/"}
                linkText={"Rachel Andrew"} 
                social_type={""} 
              />
            em 2017, fiquei fascinado com a facilidade de criar layouts complexos que podem ser facilmente redefinidos com media queries. Este site é o resultado da implementação de alguns dos exemplos práticos apresentados no vídeo a seguir.</p>
        </article>
        <div className="container_video">
          {!isVideoPlaying && (
            <div className="container_thumbnail">
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
        <div className="container_links">
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
        <div className="background"></div>
      </div>
    </>
  );
}