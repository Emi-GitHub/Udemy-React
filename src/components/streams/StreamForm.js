import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

export class StreamForm extends Component {
    renderError = (meta) => {
        if(meta.touched && meta.error){
            return(
                <div className="ui error message">
                    <div className="header">
                        {meta.error}
                    </div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        //console.log(formProps)
        console.log(formProps.meta) //meta property ima svasta, izmedju ostalog i error
        const className=`field ${formProps.meta.error && formProps.meta.touched ? 'error' : '' }`
        return (
            /*<input 
                onChange={formProps.input.onChange}
                value={formProps.input.value}
            />*/
            //that was an object with the value prop where the value property and the on change handler in all that stuff
            //that's going to take all those key value pairs and add them as properties to the input element
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off"/> 
                {this.renderError(formProps.meta)}
            </div>
        );
    }
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}> {/* bez reduxa: this.onSubmit */}
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => { //formValue sadrzi sve ono sto smo unijeli u input
    const errors = {}
    if(!formValues.title){
        //only ran if the user did not enter a title
        errors.title='You must enter a title'
    }
    if(!formValues.description){
        errors.description = 'You must enter a description'
    }
    return errors;
}

export default reduxForm({form:'streamForm', validate: validate})(StreamForm)

