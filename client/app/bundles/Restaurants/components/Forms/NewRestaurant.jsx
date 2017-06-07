import React from 'react';
import Formsy from 'formsy-react'
import TextInput from './TextInput'

const MyAppForm = React.createClass({
    getInitialState() {
        return {
            canSubmit: false
        }
    },
    enableButton() {
        this.setState({
            canSubmit: true
        });
    },
    disableButton() {
        this.setState({
            canSubmit: false
        });
    },
    submit(model) {
        // someDep.saveEmail(model.email);
        console.log(model);
    },
    render() {
        return (
            <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <TextInput name="email" validations="isEmail" validationError="This is not a valid email" required/>
                <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
            </Formsy.Form>
        );
    }
});

export default MyAppForm;

