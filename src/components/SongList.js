//ALWAYS
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions';

class SongList extends Component {
    renderList(){
        return this.props.songs.map((song) => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={()=>this.props.selectSong(song)}>Select</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}
//ALWAYS
//every time that we click on the button this function should rerun and it's going to be called with new state object a second time or a third time...
const mapStateToProps = state => { //state is list of songs
    return { songs: state.songs }; //this.props === { songs: state.songs }
}
//ALWAYS
export default connect(
    mapStateToProps, 
    { selectSong } //prop, poziv selectSong, like selectSong()
)(SongList);

//any time that you ever want to call a action creator from a component you are always going to pass it into connect function
//like up {selectSong}