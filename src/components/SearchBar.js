import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''};
    }
    onSubmit = event => {
        event.preventDefault(); //kada se klikne enter ne refresa se
        this.props.onSearchSubmit(this.state.term); //pozivamo funkciju iz App.js i saljemo joj ono sto je u inputu (tj. term)
    }
    onChange = event => {
        this.setState({
            term: event.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        <div className="ui input focus">
                            <input
                                type="text"
                                value={this.state.term}
                                onChange={this.onChange}
                                placeholder="Search..."
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
