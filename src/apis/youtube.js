import axios from 'axios'

const KEY = 'AIzaSyB0IF7DA2EWBLEsLDwbhmE0ED2QSVogPYs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`
    }
});