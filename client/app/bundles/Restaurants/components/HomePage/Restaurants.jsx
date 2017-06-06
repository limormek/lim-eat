import PropTypes from 'prop-types';
import React from 'react';

import StarRatingComponent from 'react-star-rating-component';

import {COLOR_PRIMARY, COLOR_UNSELECTED} from '../../constants/restaurantsConstants'
import Header from '../Header/Header';
import Restaurant from '../RestaurantItem/Restaurant';
import CheckBox from '../Filters/Checkbox'


const cuisineTypes = [
    'What\'s your type?', 'Asian', 'Cafe', 'Italian', 'Hamburgers', 'Salads'
];

class Restaurants extends React.Component {

    constructor() {
        super();
        this.state = {filterTenbis: false, filterKosher: false}
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({filterStars: nextValue});
    }

    onCuisineSelected(e) {
        this.setState({filterCuisine: e.target.value})
    }

    onToggleCheckbox(e) {
        if (e.target.name === 'isTenbis') {
            this.setState({filterTenbis: e.target.checked})
        } else if (e.target.name === 'isKosher') {
            this.setState({filterKosher: e.target.checked})
        }
    }

    render() {

        //todo change
        let mapPlaceholderUrl = "http://dailygenius.com/wp-content/uploads/2016/04/google-maps-new-interface1.jpg";

        let rests = this.props.restaurants
        //filter by rating
        if (this.state.filterStars) {
            rests = rests.filter(rest => rest.rating >= this.state.filterStars);
        }

        //filter by cuisine
        if (this.state.filterCuisine) {
            rests = rests.filter(rest => (
                this.state.filterCuisine === cuisineTypes[0] ||
                rest.cuisine === this.state.filterCuisine
            ));
        }

        //filter by kosher + 10bis
        if (this.state.filterKosher) {
            rests = rests.filter(rest => (
                rest.kosher === this.state.filterKosher
            ));
        }

        if (this.state.filterTenbis) {
            rests = rests.filter(rest => (
                rest.tenbis === this.state.filterTenbis
            ));
        }

        return (
            <div>

                <Header/>

                <div>
                    <span>Filter by rating: </span>
                    <StarRatingComponent
                        name='Rating'
                        value={0}
                        starCount={3}
                        starColor={COLOR_PRIMARY}
                        emptyStarColor={COLOR_UNSELECTED}
                        onStarClick={this.onStarClick.bind(this)}
                        editing={true}
                    />

                    <CheckBox title={'Kosher only?'} name={'isKosher'} toggle={this.onToggleCheckbox.bind(this)}/>
                    <CheckBox title={'10bis only?'} name={'isTenbis'} toggle={this.onToggleCheckbox.bind(this)}/>

                    <select
                        onChange={this.onCuisineSelected.bind(this)}
                        placeholder="What's your type?">

                        {cuisineTypes.map(n => (
                                <option key={n} value={n} defaultValue={this.state.selected === n}>{n}</option>
                            )
                        )}
                    </select>

                </div>

                <br/>

                <img style={mapStyle}
                     src={mapPlaceholderUrl}/>
                <ul>
                    {rests.map(item => <Restaurant key={item.name} rest={item}/>)}
                </ul>

            </div>
        )
    }
}


Restaurants.propTypes = {
    restaurants: PropTypes.array.isRequired,
};

//temp internal styling
const mapStyle = {
    width: 400,
    height: 200
};


export default Restaurants;