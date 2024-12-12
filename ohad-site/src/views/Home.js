import React from 'react';
import VideoLink from '../components/VideoLink'
import styles from './Home.module.css'

import videos from '../videos/videos.json'

function Home() {
    return (
        <div className={styles.parentContainer}>
            <div className={styles.gridContainer}>
                {videos.map((video) => (
                    <VideoLink video={video}/>
                ))}
            </div>
        </div>
        
    )
}

export default Home;