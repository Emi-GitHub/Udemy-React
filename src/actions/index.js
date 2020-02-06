// (/action - Contains files related to action creators)
//Action creator 
export const selectSong = song => {
    //Return an action
    return {
        type: 'SONG_SELECTED', //we must have type property, type is required
        playload: song
    };
};



