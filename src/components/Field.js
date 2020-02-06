import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

export class Field extends Component {
    static contextType = LanguageContext;
    render() {
        const textLabel = this.context === 'english' ? 'Name' : 'Naam'
        const textButton = this.context === 'english' ? 'Submit' : 'Voorleggen'
        return (
            <div className="ui field">
                <label>{textLabel}</label>
                <input />
                <button className="ui button primary">{textButton}</button>
            </div>
        )
    }
}

export default Field

