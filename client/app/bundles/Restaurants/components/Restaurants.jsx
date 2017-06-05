import PropTypes from 'prop-types';
import React from 'react';

import StarRatingComponent from 'react-star-rating-component';

const Restaurants = ({restaurants}) => (

    <div>
        <h3>
            Hello, hungry you!
        </h3>
        <hr />
        <ul>
            {restaurants.map(item => <Restaurant key={item.name} rest={item}/>)}
        </ul>

    </div>
);


Restaurants.propTypes = {
    restaurants: PropTypes.array.isRequired,
};

const Restaurant = (props) => (
    <li>
        <div>
            {props.rest.name} - {props.rest.cuisine}
            <br/>
            <b>Where can you find them:</b> {props.rest.address}
            <br/>
            <b>Max delivery time:</b> {props.rest.max_time}
            <br/>
            <b>Kosher?</b> {props.rest.kosher ? 'Yes' : 'No'}
            <br/>
            <b>10bis?</b> {props.rest.tenbis ? 'Oh yeah!' : 'Meh..no'}

            <br/>
            <StarRatingComponent
                name='Rating'
                value={props.rest.rating}
                starCount={3}
                starColor={'#00B6FF'}
                emptyStarColor={'#E6E6E6'}
                editing={false}
            />
        </div>
    </li>)

export default Restaurants;
