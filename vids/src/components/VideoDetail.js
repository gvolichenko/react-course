import './VideoDetail.css';
import React from 'react';

const VideoDetail = ({video}) => {
    if(video) {
        const videoLink=`https://www.youtube.com/embed/${video.id.videoId}`;
        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoLink}/>
                </div>
                <div className='video-detail ui segment'> 
                    <h4 className='ui header'>{video.snippet.title} </h4>
                    <p>{video.snippet.description}</p>
                </div> 
            </div>
        )
    }
    else return <div className='video-detail'> Video Selection </div>
}

export default VideoDetail;