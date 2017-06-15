import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {COLOR_PRIMARY, COLOR_UNSELECTED} from '../../constants/restaurantsConstants'

const cuisineToFont = (cuisine) => {

    switch (cuisine) {
        case 'Meat':
        case 'Hamburgers':
            return 'A';
        case 'Cafe':
            return 'B';
        case 'Salads':
        case 'Salad':
            return 'D';
        case 'Asian':
            return 'I';
        case 'Italian':
            return'L';
        case 'Fish and Chips':
            return 'K';
        case 'Ice Cream':
            return 'X';
        default:
            return 'F';
    }
};

const Restaurant = (props) => (
    <div className="rest">
        <div className="box">

            {props.rest.tenbis ?
                <div className="triangle">
                    <span className="triangleContent">10bis</span>
                </div>
                : ''}

            <div className={props.rest.tenbis ? "restTitle" : "restTitle restTitleNoTenBis"}>
                <h4>{props.rest.name}</h4>

                <b>Address:</b> {props.rest.address}
                <br/>
                <b>Max delivery time:</b> {props.rest.max_time}
                <br/>
                <b>Kosher?</b> {props.rest.kosher ? 'Yes' : 'No'}
                <br/>
                <StarRatingComponent
                    name='Rating'
                    value={props.rest.rating}
                    starCount={3}
                    starColor={COLOR_PRIMARY}
                    emptyStarColor={COLOR_UNSELECTED}
                    editing={false}
                />

                <div className="cuisine">{cuisineToFont(props.rest.cuisine)}</div>
            </div>
        </div>
    </div>
);

export default Restaurant;
