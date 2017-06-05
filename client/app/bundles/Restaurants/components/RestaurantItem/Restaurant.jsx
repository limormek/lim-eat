import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Restaurant = (props) => (
    <li>
        <div>

            <div>
                <span>{props.rest.name} - {props.rest.cuisine}</span>
                {props.rest.tenbis ?
                    <img
                        height={30}
                        width={100}
                        src="https://www.ta.com/system/uploads/fae/image/asset/1418/TA_10bis_DETAIL.jpg"/>
                    : ''}

            </div>


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
    </li>
);

export default Restaurant;
