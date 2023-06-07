const fetchThumbnailUrl = async (videoId, API_KEY) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
    );
    const data = await response.json();
    const thumbnailUrl = data.items[0].snippet.thumbnails.high.url;
    return thumbnailUrl;
  } catch (error) {
    console.log("Erro ao buscar o URL do thumbnail:", error);
    return null;
  }
};

export default fetchThumbnailUrl;