import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends Component {
    constructor(props){ //poziva se svaki put kad se kreira instanca ove komponente
        super(props); 
        this.state = { //object   
            lat: null, 
            errorMessage: ''
        }; 
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition( //uzima fizicku lokaciju korisnika
            position => this.setState({lat: position.coords.latitude}), 
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent=()=>{
        if (this.state.errorMessage && !this.state.lat)
            return <div>Eror: {this.state.errorMessage}</div>
        if (!this.state.errorMessage && this.state.lat)
            return <SeasonDisplay lat={this.state.lat}/>
        return <Loading message="Please accept location request" />
    }

    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
