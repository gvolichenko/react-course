import './VideoList.css';
import React from 'react';
import VideoItem from './VideoItem';


const VideoList = (props) => {
    
        
        const videos = props.videos.map((video)=> {
            return(<VideoItem video={video} key={video.id.videoId} onSelect = {props.onSelect}/>
            )
        })
        

        return(
            <div className='video-list'>  
                <div className="ui relaxed divided list">
                    {videos}
                </div>
            </div>
        )
    
};

export default VideoList;