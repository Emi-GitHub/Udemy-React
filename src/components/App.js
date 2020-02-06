import React, { Component } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };
    }

    componentDidMount(){
        this.onTermSubmit('fruits')
    }

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        })
    };

    onTermSubmit = async term => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: 'AIzaSyB0IF7DA2EWBLEsLDwbhmE0ED2QSVogPYs'
            }
        });
        //data.items vidimo na konzoli (ctrl+shift+i)
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }; 

    render() {
        return (
            <div className="ui container">
                <SearchBar callMe={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
             </div>
        )
    }
}

export default App;

