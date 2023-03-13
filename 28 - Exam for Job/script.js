const bridTvPlayerDiv = document.getElementById('bridTvPlayer');
const gridContainerDiv = document.getElementById('gridContainer');


const playlistUrl = "https://services.brid.tv/services/get/latest/26456/0/1/25/0.json";

// provjera browser cache-a za spremljene podatke
const cacheKey = 'bridTvPlaylist';
const cachedData = JSON.parse(localStorage.getItem(cacheKey));
const isCacheValid = cachedData && (Date.now() - cachedData.timestamp) / 1000 / 60 < 5;

if (isCacheValid) {
  initPlayer(cachedData.videos);
  renderGrid(cachedData.videos);
} else {
  fetch(playlistUrl)
    .then(response => response.json())
    .then(data => {
      // spremanje podataka u browser cache
      const cacheData = { videos: data.videos, timestamp: Date.now() };
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
      initPlayer(data.videos);
      renderGrid(data.videos);
    });
}

// inicijalizacija Brid.TV plejera
function initPlayer(videos) {
    if (videos && videos.length > 0) {
        const firstVideoId = videos[0].video_id;
        bridTvPlayerDiv.innerHTML = `<iframe src="//cdn.brid.tv/live/latest/${firstVideoId}.html?autoPlay=false" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;
      }  }
  
// prikaz videa u gridu
function renderGrid(videos) {
    if (videos && videos.length > 0) {
      // desktop grid 5x5
      if (window.innerWidth > 767) {
        videoGrid.style.display = "grid";
        videoGrid.style.gridTemplateColumns = "repeat(5, 1fr)";
        videoGrid.style.gridAutoRows = "1fr";
  
        videos.forEach((video) => {
          const videoContainer = document.createElement("div");
          videoContainer.className = "video-container";
          videoContainer.innerHTML = `
            <img src="${video.snapshot_url}" alt="${video.title}">
            <div class="video-info">
              <h3 class="video-title">${video.title}</h3>
              <p class="video-duration">${formatTime(video.duration)}</p>
            </div>
          `;
          videoContainer.addEventListener("click", () => {
            playVideo(video.video_id);
          });
          videoGrid.appendChild(videoContainer);
        });
      }
      // mobile grid 1x5
      else {
        videoGrid.style.display = "flex";
        videoGrid.style.flexWrap = "nowrap";
        videoGrid.style.overflowX = "scroll";
        videoGrid.style.scrollSnapType = "x mandatory";
  
        videos.forEach((video) => {
          const videoContainer = document.createElement("div");
          videoContainer.className = "video-container";
          videoContainer.style.width = "50%";
  
          videoContainer.innerHTML = `
            <img src="${video.snapshot_url}" alt="${video.title}">
            <div class="video-info">
              <h3 class="video-title">${video.title}</h3>
              <p class="video-duration">${formatTime(video.duration)}</p>
            </div>
          `;
          videoContainer.addEventListener("click", () => {
            playVideo(video.video_id);
          });
          videoGrid.appendChild(videoContainer);
        });
      }
    }
  }
  
  // pretvaranje trajanja videa u format HH:MM:SS
  function formatDuration(durationInSeconds) {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds - hours * 3600) / 60);
    const seconds = durationInSeconds - hours * 3600 - minutes * 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  // prikazivanje videa u Brid.TV playeru
  function playVideo(videoId) {
    bridTvPlayerDiv.innerHTML = `<iframe src="//cdn.brid.tv/live/latest/${videoId}.html?autoPlay=true" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>`;
  }
  