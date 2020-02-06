import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { term: '' };
    }

    onInputChange = event => { //event uzima vrijednost iz inputa
        this.setState({
            term: event.target.value
        });
    };

    onFormSubmit = event => {
        event.preventDefault(); //ne refresa se nakon klika enter, ostavlja prethodno
        //TODO: Make sure we call calback from parent component (App.js)
        this.props.callMe(this.state.term);
    };

    render() {
        return (
            <div className="search bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
