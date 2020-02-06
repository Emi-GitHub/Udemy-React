import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import axios from 'axios';

export class App extends Component {
    constructor(props){
        super(props);
        this.state = { images: [] }; //definisemo listu slika
    }
    onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term},
            headers: {Authorization: 'Client-ID e6b18936be74cf8286eea003c9317815e2272b20f8e720be55dbada2ab5af6da'}
        });
        this.setState({images: response.data.results});
        console.log(response.data.results)
    }
    render() {
        return (
            <div>
                <SearchBar onSearchSubmit={this.onSearchSubmit} /> {/* saljemo funkciju kao props */}                
                <ImageList images={this.state.images} /> {/* saljemo listu slika kao props */}
            </div>
        )
    }
}

export default App
