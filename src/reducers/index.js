//(/reducers- Files related to reducers)
import { combineReducers } from 'redux';

const songsReducer = () => {
    //static array
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30'},
        { title: 'All Star', duration: '3:15'},
        { title: 'I Want it That Way', duration: '1:45'}
    ];
};
const selectedSongReducer = (selectedSong=null, action) => { //kad se prvi put pokrece apl necemo imati ni jednu selectedSong
    if(action.type === 'SONG_SELECTED'){
        return action.playload;
    }
    return selectedSong;
}

export default combineReducers({ //object
    //the keys of this object are going to be the keys that show up inside of our state object
    songs: songsReducer,
    selectedSong: selectedSongReducer
})