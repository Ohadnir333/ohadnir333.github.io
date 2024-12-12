import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router";
import videos from "../videos/videos.json";

function Video() {
    const { videoId } = useParams();
    const video = videos.find((video) => video.url === videoId)
    const navigate = useNavigate()

    useEffect(() => {
        if (!video) {
            navigate('/not-found')
        }
    }, [video, navigate])

    return (
        <div>
            {video ? (
                <div>
                    <h2>{video.title}</h2>
                    <iframe width="560" height="315" src={video.youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            ) : (
                <p>Redirecting...</p>
            )}
        </div>
    )
    
}

export default Video;