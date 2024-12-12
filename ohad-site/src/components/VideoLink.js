import React from 'react';
import styles from './VideoLink.module.css'

function VideoLink({ video }) {

    return (
        <div className={styles.contain}>
            <a className={styles.link} href={`/videos/${video.url}`}>
                <img className={styles.img} src={`${process.env.PUBLIC_URL}/thumbnails/${video.thumbnailFile}`}/>
                <h2 className={styles.name}>{video.title}</h2>
            </a>
        </div>
    )
}

export default VideoLink;