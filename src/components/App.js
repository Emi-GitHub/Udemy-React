import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext';
import Field from './Field';

class App extends Component {
    state = {
        language: 'english'
    }
    onLanguageChange = language => {
        this.setState({
            language: language
        })
    }
    render() {
        return (
            <div className="ui container">
                 Select a language:
                <i className="flag us" onClick={()=>this.onLanguageChange('english')}/>
                <i className="flag nl" onClick={()=>this.onLanguageChange('dutch')}/>
                <LanguageContext.Provider value={this.state.language}> {/* anytime that i change the state language property i want to take that new value and push it into the provider*/}
                    <div className="ui form">
                        <Field />
                    </div>
                </LanguageContext.Provider>        
            </div>
        )
    }
}

export default App

