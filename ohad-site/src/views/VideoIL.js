import React, { useEffect, useState } from 'react';
import videosIL from '../videos/videoil.json';
import style from './Videoil.module.css';

function VideoIL() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videosIL);
  }, []);

  return (
    <div className={style.contain}>
      <div className={style.videosGrid}>
        {videos.map((video) => (
          <a
            key={video.title}
            href={`https://www.youtube.com/watch?v=${video.youtubeLink.split('embed/')[1] || video.youtubeLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className={style.videoCard}
          >
            <div className={style.thumbnailWrapper}>
              <img
                src={`${process.env.PUBLIC_URL}/${video.thumbnailFile}`}
                alt={video.title}
                className={style.thumbnail}
              />
              <div className={style.overlay}>
                <div className={style.textBox}>
                  <h2>{video.title}</h2>
                  <p>{video.client}</p>
                  <p>{video.category}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default VideoIL;
