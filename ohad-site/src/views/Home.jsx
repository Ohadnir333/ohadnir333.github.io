import React from 'react';
import { Link } from "react-router";
import videos from "../videos/videos.json";
import style from "../components/VideoLink.module.css";
import gridStyle from "./Home.module.css";
import { videoLabels } from "../components/videoLabels";

function Home() {
  return (
    <div className={gridStyle.parentContainer}>
      <div className={gridStyle.gridContainer}>
        {videos.map((video, index) => {
          const { client, category } = videoLabels(video);
          return (
          <Link 
            key={index}
            to={`/videos/${video.url}`}
            className={style.link}
          >
            <img
              src={`${process.env.PUBLIC_URL}/${video.thumbnailFile}`}
              alt={video.title}
              className={style.img}
            />
            <div className={style.name}>
              <h2>{video.title}</h2>
              {client && <p>{client}</p>}
              {category && <p>{category}</p>}
            </div>
          </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
