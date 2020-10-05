import axios from 'axios';

const KEY='AIzaSyANE_H2GlgPUw5guxhrvMUHD83nxWI_SRo';

const youtubeAxios =  axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});

export default youtubeAxios;

