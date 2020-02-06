import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    store = {language: 'english'};

    onLanguageChange = (language) => {
        this.setState({language:language})
    }
    render(){
        //value is goting to be combination of everithing of our state object
        return (
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider> 
        )
    }
}

export default Context;