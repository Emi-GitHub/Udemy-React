import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
    renderSubmit(language){
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }
    renderButton(color){
        return(
            <button>
            <LanguageContext.Consumer name={`ui button ${color}`}>
                {({language})=> this.renderSubmit(language)}
            </LanguageContext.Consumer>
        </button>
        )
    }
    render(){
        return (
            <ColorContext.Consumer>
                {color => (this.renderButton(color))}
            </ColorContext.Consumer>
        )
    }
}

export default Button;

