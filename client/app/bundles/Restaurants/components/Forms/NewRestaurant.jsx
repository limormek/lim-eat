import React from 'react';
import Formsy from 'formsy-react'
import TextInput from './TextInput'
import FormCheckbox from './FormCheckbox'

import Api from '../../schemas/api'


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
            canSubmit: false,
            added: false,
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
        let {name, cuisine, rating, tenbis, address, max_time, kosher} = model;

        tenbis = (tenbis === undefined) ? false : tenbis;
        kosher = (kosher === undefined) ? false : kosher;

        let data = {
            restaurant: {
                name: name,
                cuisine: cuisine,
                rating: rating,
                tenbis: tenbis,
                address: address,
                max_time: max_time,
                kosher: kosher
            }
        };

        Api.post('/', 'create', JSON.stringify(data), (data) => {
            this.setState({added: true});
        })
    },
    render() {
        if (this.state.added) {
            return <div>
                <h3>Restaurant Successfully added!</h3>
                <a href="/">Back to home page</a>
            </div>
        }

        return (
            <div>
                <h3>Add a new restaurant</h3>
                <div>

                    <Formsy.Form
                        className="form"
                        onValidSubmit={this.submit}
                        onValid={this.enableButton}
                        onInvalid={this.disableButton}>
                        <span>Restaurant Name:</span>


                        <TextInput name="name" required/>
                        <span>Cuisine:</span>
                        <TextInput name="cuisine" validations="isWords"
                                   validationError="Well, the cuisine should be a word"
                                   className={'oui-form__input'} required/>

                        <span>Rating:</span>
                        <TextInput name="rating" validations="isRatingValid"
                                   validationError="The rating should be a number between 1-3" required/>
                        <span>Accepts 10bis?</span>
                        <FormCheckbox name="tenbis"/>

                        <span>Address:</span>
                        <TextInput name="address" validationError="Invalid address" required/>

                        <span>Max delivery time (minutes):</span>
                        <TextInput name="max_time" validations="isNumeric" validationError="Invalid number" required/>

                        <span>Kosher?</span>
                        <FormCheckbox name="kosher"/>

                        <br/>

                        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
                    </Formsy.Form>

                    <div className="sidePhoto"></div>
                </div>
            </div>
        );
    }
});

export default MyAppForm;

