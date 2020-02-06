import React, { Component } from 'react';
//import {Field, reduxForm} from 'redux-form'; //Field je komponenta, a reduxForm je funkcija
import { connect } from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

export class StreamCreate extends Component {
//ako zaboravimo staviti funkcioju kao arrow, dobicemo poruku Cannot read property 'props' of undefined
    onSubmit = (formValues) => {
        //event.preventDefault(); //poziva se automacki kod reduxa
        //console.log(formValues)
        this.props.createStream(formValues);
    }

    render() {
        //console.log(this.props)
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

//export default connnect()(reduxForm({form:'streamCreate', validate: validate})(StreamCreate)) //umjesto ove linije, pisemo jednostavnije dvije ispod

export default connect(null, {createStream})(StreamCreate);