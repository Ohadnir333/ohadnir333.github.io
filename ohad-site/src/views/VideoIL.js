import React, { useEffect, useState } from 'react';
import videosIL from '../videos/videoil.json';
import style from './Videoil.module.css';
import { videoLabels } from '../components/videoLabels';

function VideoIL() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videosIL);
  }, []);

  return (
    <div className={style.contain}>
      <div className={style.videosGrid}>
        {videos.map((video) => {
          const { client, category } = videoLabels(video);
          return (
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
                  {client && <p>{client}</p>}
                  {category && <p>{category}</p>}
                </div>
              </div>
            </div>
          </a>
          );
        })}
      </div>
    </div>
  );
}

export default VideoIL;
