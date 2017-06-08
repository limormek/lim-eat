import React from 'react';
import Formsy from 'formsy-react'
import TextInput from './TextInput'
import FormCheckbox from './FormCheckbox'


Formsy.addValidationRule('isRatingValid', (values, value) => {
    value = parseInt(value);
    if (typeof value !== 'number') {
        return false;
    }
    return value <= 3 && value > 0;
});


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
            <div>
                <h3>Add a new restaurant</h3>
                <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                    <span>Restaurant Name:</span>


                    <TextInput name="rest_name" required/>
                    <span>Cuisine:</span>
                    <TextInput name="cuisine" validations="isWords" validationError="Well, the cuisine should be a word"
                               className={'oui-form__input'} required/>

                    <span>Address:</span>
                    <TextInput name="address" validations="isAlphanumeric" validationError="Invalid address" required/>

                    <span>Accepts 10bis?</span>
                    <FormCheckbox name="tenbis"/>
                    <span>Kosher?</span>
                    <FormCheckbox name="kosher"/>
                    <span>Rating:</span>
                    <TextInput name="rating" validations="isRatingValid"
                               validationError="The rating should be a number between 1-3" required/>

                    <span>Max delivery time (minutes):</span>
                    <TextInput name="max_time" validations="isNumeric" validationError="Invalid number" required/>
                    <br/>

                    <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
                </Formsy.Form>
            </div>
        );
    }
});

export default MyAppForm;

