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


const RestaurantForm = React.createClass({
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
        let {name, cuisine, rating, tenbis, address, max_time, kosher, lat, lng} = model;

        tenbis = (tenbis === undefined) ? false : tenbis;
        kosher = (kosher === undefined) ? false : kosher;

        lat = (lat === undefined) ? 32.081253 : lat;
        lng = (lng === undefined) ? 34.779964 : lng;

        let data = {
            restaurant: {
                name: name,
                cuisine: cuisine,
                rating: rating,
                tenbis: tenbis,
                address: address,
                max_time: max_time,
                kosher: kosher,
                lat: lat,
                lng: lng
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
                <a href="/"><i className="glyphicon glyphicon-arrow-left"></i>  Back to home page</a>
            </div>
        }

        return (
            <div>
                <h3 className="form-title">Add a new restaurant</h3>
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

                        {/*32.081253, 34.779964*/}
                        <span>Latitude:</span>
                        <TextInput name="lat" validations="isFloat" validationError="Invalid coordinates"/>
                        <span>Longitude:</span>
                        <TextInput name="lng" validations="isFloat" validationError="Invalid coordinates"/>


                        <br/>

                        <button className="submit" type="submit" disabled={!this.state.canSubmit}>Submit</button>
                    </Formsy.Form>

                    <div className="sidePhoto"></div>
                </div>
            </div>
        );
    }
});

export default RestaurantForm;

