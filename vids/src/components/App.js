import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtubeAxios from '../api/youtube';

class App extends React.Component{
    
    state = {videos: [], selectedVideo : null}

    onSearchSubmit =  async (term) => { // will need to be async for the API request
        
        
        const response = await youtubeAxios.get('/search',{
            params: {q: term}
        });

        console.log(response);
        
        
        this.setState({videos: response.data.items});
        
        // try the fetch way
        
    }

    onVideoSelect = (video) => {
        this.setState( {selectedVideo: video});
    }
    
    render(){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <div className='video-results'>
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos} onSelect={this.onVideoSelect}/> 
                </div>
            </div>
        )
    }
}

export default App;