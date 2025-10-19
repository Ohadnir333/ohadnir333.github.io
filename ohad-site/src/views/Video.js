import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router";
import videos from "../videos/videos.json";
import style from "./Video.module.css";

function Video() {
    const { videoId } = useParams();
    const video = videos.find((video) => video.url === videoId);
    const navigate = useNavigate();

    // if video not found, redirect to /not-found
    useEffect(() => {
        if (!video) {
            navigate('/not-found');
        }
    }, [video, navigate]);

    return (
        <div>
            {video ? (
                <div className={style.contain}>
                    {/* Video information section */}
                    <div className={style.videoInfo}>
                        <h2>{video.title}</h2>
                        <p>Client: {video.client}</p>
                        <p>{video.category}</p>
                    </div>

                    {/* Embedded video player */}
                    <iframe
                        src={video.youtubeLink}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            ) : (
                <p>Redirecting...</p>
            )}
        </div>
    );
}

export default Video;
